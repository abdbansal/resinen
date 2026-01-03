
import React, { useState, useCallback, useMemo } from 'react';
import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainCanvas from './components/MainCanvas';
import AddContentPanel from './components/AddContentPanel';
import { Page, Container, WidgetType } from './types';
import { generateId } from './utils/id';

const initialContainerId = generateId();
const initialPageId = generateId();

const initialPage: Page = {
  id: initialPageId,
  name: 'Home Dashboard',
  icon: 'Home',
  rootContainer: {
    id: initialContainerId,
    direction: null,
    children: [],
    content: null,
    parentId: null,
  },
  children: [],
  parentId: null,
};

const App: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([initialPage]);
  const [activePageId, setActivePageId] = useState<string>(initialPageId);
  const [selectedContainerId, setSelectedContainerId] = useState<string | null>(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  const updateContainer = (container: Container, id: string, updater: (c: Container) => Container): Container => {
    if (container.id === id) {
      return updater(container);
    }
    return {
      ...container,
      children: container.children.map(child => updateContainer(child, id, updater)),
    };
  };

  const handleSplit = useCallback((containerId: string, direction: 'horizontal' | 'vertical') => {
    setPages(prevPages => prevPages.map(page => {
      if (page.id !== activePageId) return page;
      
      const newRoot = updateContainer(page.rootContainer, containerId, (container) => ({
        ...container,
        direction,
        content: null,
        children: [
          { id: generateId(), direction: null, children: [], content: null, parentId: container.id },
          { id: generateId(), direction: null, children: [], content: null, parentId: container.id },
        ],
      }));
      return { ...page, rootContainer: newRoot };
    }));
  }, [activePageId]);

  const handleAddContent = useCallback((containerId: string, widgetType: WidgetType) => {
    setPages(prevPages => prevPages.map(page => {
        if (page.id !== activePageId) return page;
        
        const newRoot = updateContainer(page.rootContainer, containerId, (container) => {
            if (container.children.length > 0) {
                // This should not happen if UI is correct, but as a safeguard
                console.warn("Cannot add content to a container that has children.");
                return container;
            }
            return {
                ...container,
                content: { type: widgetType, data: {} }
            };
        });
        return { ...page, rootContainer: newRoot };
    }));
    setSelectedContainerId(null);
  }, [activePageId]);
  
  const handleResetContainer = useCallback((containerId: string) => {
    setPages(prevPages => prevPages.map(page => {
      if (page.id !== activePageId) return page;
      
      const newRoot = updateContainer(page.rootContainer, containerId, (container) => ({
        ...container,
        direction: null,
        children: [],
        content: null,
      }));
      return { ...page, rootContainer: newRoot };
    }));
  }, [activePageId]);

  const handleSelectContainerForContent = useCallback((containerId: string) => {
    setSelectedContainerId(containerId);
  }, []);
  
  const activePage = useMemo(() => pages.find(p => p.id === activePageId) || pages[0], [pages, activePageId]);

  return (
    <div className="h-screen w-screen bg-[#0D0F19] flex flex-col font-sans text-gray-300">
      <TopBar activePageName={activePage.name} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          pages={pages} 
          activePageId={activePageId} 
          setActivePageId={setActivePageId}
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <main className="flex-1 flex transition-all duration-300">
           <MainCanvas 
              key={activePage.id}
              rootContainer={activePage.rootContainer}
              onSplit={handleSplit}
              onAddContent={handleSelectContainerForContent}
              onResetContainer={handleResetContainer}
            />
           <AddContentPanel 
             isOpen={!!selectedContainerId}
             onClose={() => setSelectedContainerId(null)}
             onSelectWidget={(widgetType) => {
               if(selectedContainerId) {
                 handleAddContent(selectedContainerId, widgetType);
               }
             }}
           />
        </main>
      </div>
    </div>
  );
};

export default App;

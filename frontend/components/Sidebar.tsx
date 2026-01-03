
import React from 'react';
import { Page } from '../types';
import { HomeIcon, ChevronRightIcon } from './Icons';

interface SidebarProps {
  pages: Page[];
  activePageId: string;
  setActivePageId: (id: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const SidebarItem: React.FC<{ page: Page, activePageId: string, setActivePageId: (id: string) => void, isCollapsed: boolean }> = ({ page, activePageId, setActivePageId, isCollapsed }) => {
    const isActive = page.id === activePageId;
    return (
        <div className="my-0.5">
            <button
                onClick={() => setActivePageId(page.id)}
                className={`w-full flex items-center text-left px-3 py-1.5 rounded-md transition-all duration-200 ${
                    isActive
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
            >
                <HomeIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                {!isCollapsed && <span className="flex-1 text-sm font-medium truncate">{page.name}</span>}
            </button>
        </div>
    )
}

const Sidebar: React.FC<SidebarProps> = ({ pages, activePageId, setActivePageId, isCollapsed, setIsCollapsed }) => {
  return (
    <aside className={`flex-shrink-0 bg-[#1A1B26]/30 border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex-1 p-2">
        <nav>
            {pages.map(page => (
                <SidebarItem key={page.id} page={page} activePageId={activePageId} setActivePageId={setActivePageId} isCollapsed={isCollapsed} />
            ))}
        </nav>
      </div>
      <div className="p-2 border-t border-white/10">
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="w-full flex justify-center items-center p-2 rounded-md text-gray-400 hover:bg-white/5">
          <ChevronRightIcon className={`w-5 h-5 transition-transform duration-300 ${isCollapsed ? '' : 'rotate-180'}`} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

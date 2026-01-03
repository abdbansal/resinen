
import React, { useState } from 'react';
import { Container as ContainerType } from '../types';
import ContainerActions from './ContainerActions';
import EmptyState from './EmptyState';
import WidgetRenderer from './widgets';

interface ContainerProps {
  container: ContainerType;
  onSplit: (containerId: string, direction: 'horizontal' | 'vertical') => void;
  onAddContent: (containerId: string) => void;
  onResetContainer: (containerId: string) => void;
}

const Container: React.FC<ContainerProps> = ({ container, onSplit, onAddContent, onResetContainer }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, direction, children, content, parentId } = container;

  const hasChildren = children.length > 0;
  
  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {hasChildren ? (
        <div className={`flex h-full w-full p-4 gap-4 ${direction === 'vertical' ? 'flex-col' : 'flex-row'}`}>
          {children.map((child) => (
            <div key={child.id} className="flex-1 min-w-0 min-h-0 bg-black/10 rounded-lg">
              <Container
                container={child}
                onSplit={onSplit}
                onAddContent={onAddContent}
                onResetContainer={onResetContainer}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full w-full p-1">
            <div className="relative h-full w-full rounded-md border border-dashed border-white/10 transition-colors duration-200 hover:border-pink-500/80">
                {content ? (
                    <WidgetRenderer widget={content} />
                ) : (
                    <EmptyState 
                        containerId={id}
                        onSplit={onSplit}
                        onAddContent={onAddContent}
                    />
                )}
                {isHovered && (
                    <ContainerActions 
                        containerId={id} 
                        onSplit={onSplit}
                        onAddContent={onAddContent}
                        onResetContainer={onResetContainer}
                        canReset={!!parentId || !!content}
                    />
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default Container;


import React from 'react';
import { Container as ContainerType } from '../types';
import Container from './Container';
import EmptyState from './EmptyState';

interface MainCanvasProps {
  rootContainer: ContainerType;
  onSplit: (containerId: string, direction: 'horizontal' | 'vertical') => void;
  onAddContent: (containerId: string) => void;
  onResetContainer: (containerId: string) => void;
}

const MainCanvas: React.FC<MainCanvasProps> = ({ rootContainer, onSplit, onAddContent, onResetContainer }) => {
  const isEmptyPage = rootContainer.children.length === 0 && !rootContainer.content;

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="h-full w-full bg-[#1A1B26] shadow-2xl shadow-black/20 ring-1 ring-white/5 rounded-lg">
        {isEmptyPage ? (
          <EmptyState
            containerId={rootContainer.id}
            onSplit={onSplit}
            onAddContent={onAddContent}
            isPageRoot={true}
          />
        ) : (
          <Container
            container={rootContainer}
            onSplit={onSplit}
            onAddContent={onAddContent}
            onResetContainer={onResetContainer}
          />
        )}
      </div>
    </div>
  );
};

export default MainCanvas;


import React from 'react';
import { AddIcon, SplitVerticalIcon, SplitHorizontalIcon, NestPageIcon, DataIcon, TrashIcon } from './Icons';

interface ContainerActionsProps {
  containerId: string;
  onSplit: (containerId: string, direction: 'horizontal' | 'vertical') => void;
  onAddContent: (containerId: string) => void;
  onResetContainer: (containerId: string) => void;
  canReset: boolean;
}

const ActionButton: React.FC<{ onClick: () => void; children: React.ReactNode; tooltip: string; className?: string }> = ({ onClick, children, tooltip, className = '' }) => (
  <div className="relative group">
    <button
      onClick={onClick}
      className={`p-1.5 rounded-md transition-all duration-150 shadow-lg ring-1 ring-white/10 ${className}`}
    >
      {children}
    </button>
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
      {tooltip}
    </div>
  </div>
);

const ContainerActions: React.FC<ContainerActionsProps> = ({ containerId, onSplit, onAddContent, onResetContainer, canReset }) => {
  return (
    <div className="absolute top-2 left-2 z-10 flex items-center space-x-2">
      <ActionButton onClick={() => onAddContent(containerId)} tooltip="Add Content" className="text-gray-300 bg-[#1A1B26]/80 backdrop-blur-sm hover:bg-white/20 hover:text-white">
        <AddIcon className="w-4 h-4" />
      </ActionButton>
      <ActionButton onClick={() => onSplit(containerId, 'vertical')} tooltip="Split Vertically" className="text-gray-300 bg-[#1A1B26]/80 backdrop-blur-sm hover:bg-white/20 hover:text-white">
        <SplitVerticalIcon className="w-4 h-4" />
      </ActionButton>
      <ActionButton onClick={() => onSplit(containerId, 'horizontal')} tooltip="Split Horizontally" className="text-gray-300 bg-[#1A1B26]/80 backdrop-blur-sm hover:bg-white/20 hover:text-white">
        <SplitHorizontalIcon className="w-4 h-4" />
      </ActionButton>
      {canReset && (
        <ActionButton onClick={() => onResetContainer(containerId)} tooltip="Reset Container" className="text-red-400 bg-[#1A1B26]/80 backdrop-blur-sm hover:bg-red-500/20 hover:text-red-300">
            <TrashIcon className="w-4 h-4" />
        </ActionButton>
      )}
    </div>
  );
};

export default ContainerActions;

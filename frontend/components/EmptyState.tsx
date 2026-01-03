
import React from 'react';
import { AddIcon, SplitHorizontalIcon, DataIcon } from './Icons';

interface EmptyStateProps {
  containerId: string;
  onSplit: (containerId:string, direction: 'horizontal' | 'vertical') => void;
  onAddContent: (containerId: string) => void;
  isPageRoot?: boolean;
}

const EmptyStateButton: React.FC<{onClick: () => void, icon: React.ReactNode, text: string, subtext: string}> = ({onClick, icon, text, subtext}) => (
    <button onClick={onClick} className="flex items-center text-left p-3 rounded-lg hover:bg-white/5 w-full max-w-sm transition-colors duration-150">
        <div className="p-2 bg-white/5 rounded-lg mr-4 text-gray-400">
            {icon}
        </div>
        <div>
            <div className="font-medium text-gray-200">{text}</div>
            <div className="text-sm text-gray-400">{subtext}</div>
        </div>
    </button>
);


const EmptyState: React.FC<EmptyStateProps> = ({ containerId, onSplit, onAddContent, isPageRoot = false }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-center p-8">
      <div className="w-full">
        {isPageRoot && (
            <div className="mb-8">
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Start building your page</h2>
                <p className="mt-2 text-gray-400">Add content, split the layout, or connect to a data source.</p>
            </div>
        )}
        <div className="flex flex-col items-center space-y-3">
             <EmptyStateButton 
                onClick={() => onAddContent(containerId)}
                icon={<AddIcon className="w-5 h-5" />}
                text="Add Content"
                subtext="Add widgets like text, tables, or charts."
            />
             <EmptyStateButton 
                onClick={() => onSplit(containerId, 'horizontal')}
                icon={<SplitHorizontalIcon className="w-5 h-5" />}
                text="Split Layout"
                subtext="Create columns or rows to organize content."
            />
             <EmptyStateButton 
                onClick={() => alert('Attach Data not implemented')}
                icon={<DataIcon className="w-5 h-5" />}
                text="Attach Data"
                subtext="Connect this page to a data source."
            />
        </div>
      </div>
    </div>
  );
};

export default EmptyState;

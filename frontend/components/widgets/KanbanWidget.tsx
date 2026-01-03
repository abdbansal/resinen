
import React from 'react';

export const KanbanWidget: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-base font-semibold text-gray-100 mb-2 flex-shrink-0">Project Tasks</h3>
      <div className="flex-1 grid grid-cols-3 gap-3">
        <div className="bg-black/20 rounded p-2">
            <div className="font-medium text-sm mb-2 text-gray-300">To Do</div>
            <div className="bg-[#1A1B26] ring-1 ring-white/5 p-2 rounded shadow-sm text-sm text-gray-300">Design new landing page</div>
        </div>
        <div className="bg-black/20 rounded p-2">
            <div className="font-medium text-sm mb-2 text-gray-300">In Progress</div>
            <div className="bg-[#1A1B26] ring-1 ring-white/5 p-2 rounded shadow-sm text-sm text-gray-300">Develop API integration</div>
        </div>
        <div className="bg-black/20 rounded p-2">
            <div className="font-medium text-sm mb-2 text-gray-300">Done</div>
        </div>
      </div>
    </div>
  );
};

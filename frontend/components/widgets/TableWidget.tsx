
import React from 'react';

export const TableWidget: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-base font-semibold text-gray-100 mb-2 flex-shrink-0">Active Users</h3>
      <div className="flex-1 border border-white/10 rounded-md p-2 bg-transparent">
        <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-400 border-b border-white/10 pb-1 mb-1">
            <div>Name</div>
            <div>Email</div>
            <div>Status</div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-300">
            <div>Jane Cooper</div>
            <div>jane.cooper@example.com</div>
            <div className="flex items-center text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 mr-2 shadow-[0_0_4px_#22c55e]"></span>
                Active
            </div>
        </div>
      </div>
    </div>
  );
};

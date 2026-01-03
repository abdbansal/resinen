
import React from 'react';

export const ChartWidget: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h3 className="text-base font-semibold text-gray-100 mb-2 flex-shrink-0">Monthly Recurring Revenue</h3>
      <div className="flex-1 border border-dashed border-white/20 rounded-md flex items-center justify-center">
        <p className="text-gray-500 text-sm">[Chart Visualization]</p>
      </div>
    </div>
  );
};

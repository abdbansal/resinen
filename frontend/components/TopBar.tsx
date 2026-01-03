
import React from 'react';
import { ChevronRightIcon } from './Icons';

interface TopBarProps {
    activePageName: string;
}

const TopBar: React.FC<TopBarProps> = ({ activePageName }) => {
  return (
    <header className="flex-shrink-0 bg-[#1A1B26]/50 backdrop-blur-sm h-14 border-b border-white/10 flex items-center justify-between px-4 z-10">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <div className="font-semibold text-lg text-gray-100">Workspace</div>
      </div>

      {/* Center Section - Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-400">
        <span>Pages</span>
        <ChevronRightIcon className="w-4 h-4 mx-1 text-gray-500" />
        <span className="font-medium text-gray-200">{activePageName}</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="text-sm font-medium text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors">Share</button>
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
};

export default TopBar;

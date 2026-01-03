
import React from 'react';
import { WidgetType } from '../types';
import { CloseIcon, TextIcon, TableIcon, ChartIcon, KanbanIcon } from './Icons';

interface AddContentPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWidget: (widgetType: WidgetType) => void;
}

const WIDGET_OPTIONS = [
  { type: WidgetType.TextBlock, label: 'Text Block', icon: <TextIcon /> },
  { type: WidgetType.Table, label: 'Table View', icon: <TableIcon /> },
  { type: WidgetType.Chart, label: 'Chart', icon: <ChartIcon /> },
  { type: WidgetType.Kanban, label: 'Kanban Board', icon: <KanbanIcon /> },
];

const AddContentPanel: React.FC<AddContentPanelProps> = ({ isOpen, onClose, onSelectWidget }) => {
  return (
    <div
      className={`flex-shrink-0 bg-[#1A1B26]/80 backdrop-blur-sm border-l border-white/10 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-72' : 'w-0'
      } overflow-hidden`}
    >
      <div className="flex flex-col h-full w-72">
        <header className="flex items-center justify-between p-3 border-b border-white/10 flex-shrink-0">
          <h2 className="font-semibold text-gray-200">Add Content</h2>
          <button onClick={onClose} className="p-1 rounded-md text-gray-400 hover:bg-white/10">
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>
        <div className="p-3 flex-1 overflow-y-auto">
          <div className="space-y-1">
            {WIDGET_OPTIONS.map(({ type, label, icon }) => (
              <button
                key={type}
                onClick={() => onSelectWidget(type)}
                className="w-full flex items-center text-left p-2 rounded-md text-gray-300 hover:bg-white/10 transition-colors duration-150"
              >
                <span className="mr-3 text-gray-400">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContentPanel;

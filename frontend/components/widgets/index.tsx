
import React from 'react';
import { Widget } from '../../types';
import { TextBlockWidget } from './TextBlockWidget';
import { ChartWidget } from './ChartWidget';
import { TableWidget } from './TableWidget';
import { KanbanWidget } from './KanbanWidget';

interface WidgetRendererProps {
  widget: Widget;
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  const renderWidget = () => {
    switch (widget.type) {
      case 'TextBlock':
        return <TextBlockWidget />;
      case 'Chart':
        return <ChartWidget />;
      case 'Table':
        return <TableWidget />;
      case 'Kanban':
        return <KanbanWidget />;
      default:
        return (
          <div className="p-4 bg-red-500/10 text-red-400 rounded-md">
            Unknown widget type: {widget.type}
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full p-4 bg-transparent rounded-md overflow-hidden">
        {renderWidget()}
    </div>
  );
};

export default WidgetRenderer;

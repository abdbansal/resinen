
export enum WidgetType {
  TextBlock = 'TextBlock',
  Metric = 'Metric',
  Table = 'Table',
  Chart = 'Chart',
  Kanban = 'Kanban',
  Form = 'Form',
  Button = 'Button',
  ActivityFeed = 'ActivityFeed',
  NestedPageLink = 'NestedPageLink',
}

export interface Widget {
  type: WidgetType;
  data: any; // Placeholder for widget-specific data
}

export interface Container {
  id: string;
  direction: 'horizontal' | 'vertical' | null;
  children: Container[];
  content: Widget | null;
  parentId: string | null;
}

export interface Page {
  id: string;
  name: string;
  icon: string; // Could be enum or component name
  rootContainer: Container;
  children: Page[];
  parentId: string | null;
}

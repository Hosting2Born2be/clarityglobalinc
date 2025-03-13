export type Node = {
  type: string;
  tag: string;
  text?: string;
  listType?: 'bullet' | 'number';
  fields?: {
    blockType: 'table' | 'list';
    columns: { header: string }[];
    rows: { cells: { value: string }[] }[];
    url?: string;
    newTab?: boolean;
  };
  children?: Node[];
};

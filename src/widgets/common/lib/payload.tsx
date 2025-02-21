import { createElement, isValidElement, type ReactNode } from 'react';

import { nanoid } from '@/shared/lib/id';
import { type ColumnDef, columnDefBuilder } from '@/shared/lib/table';
import { PropertyList } from '@/shared/ui/components/property-list';
import { Table } from '@/shared/ui/components/table';
import { Text } from '@/shared/ui/kit/text';

import st from './payload.module.css';
import { Node } from './types';

export function parseJSONToElements(json: Node[]): ReactNode[] {
  if (!Array.isArray(json)) return [<></>];

  return json.map(parseNode);
}

function parseNode(node: Node, listStyle = {}): React.ReactNode {
  if (node.type === 'heading') {
    return createElement(node.tag, null, parseChildren(node.children));
  }

  if (node.type === 'block' && node.fields?.blockType === 'table') {
    const columns: ColumnDef<Record<string, string>, unknown>[] =
      columnDefBuilder(
        node.fields.columns.map(item => ({
          accessorKey: item.header,
          header: item.header,
          size: 200,
          cell: ({ getValue }) => (
            <Text size="sm" weight={400}>
              {getValue<string>()}
            </Text>
          ),
        })),
      );

    const data = node.fields.rows.map(row => {
      const rowData: Record<string, string> = {};

      row.cells.forEach((cell, index) => {
        const header = node.fields?.columns[index].header as string;
        rowData[header] = cell.value.trim();
      });

      return rowData;
    });

    return (
      <Table
        key={nanoid()}
        data={data}
        columns={columns}
        className={st.tableMargin}
        columnFullWidth
      />
    );
  }

  if (node.type === 'block' && node.fields?.blockType === 'list') {
    const columns = columnDefBuilder(
      node.fields.rows.map(item => {
        return {
          accessorKey: item.cells[0].value,
          header: item.cells[0].value,
        };
      }),
    );

    const data = node.fields.rows.map(row => {
      const [first, second] = row.cells;

      return { [first.value]: second.value };
    });

    return <PropertyList key={nanoid()} data={data} properties={columns} />;
  }

  if (node.type === 'paragraph') {
    return <p key={nanoid()}>{parseChildren(node.children)}</p>;
  }

  if (node.type === 'list') {
    const listSt =
      node.listType === 'bullet'
        ? {
            listStyleType: 'disc',
            listPositionType: 'inside',
            marginLeft: '20px',
          }
        : '';

    return <ul key={nanoid()}>{parseChildren(node.children, listSt)}</ul>;
  }

  if (node.type === 'listitem') {
    return (
      <li key={nanoid()} style={listStyle}>
        {parseChildren(node.children)}
      </li>
    );
  }

  if (node.type === 'text') {
    return node.text;
  }

  if (node.type === 'linebreak') {
    return <br key={nanoid()} />;
  }

  return null;
}

function parseChildren(children?: Node[], listStyle = {}) {
  if (!Array.isArray(children)) return '';
  return children.map(child => parseNode(child, listStyle));
}

export function groupElementsByH4(
  elements: React.ReactNode[],
): { title: string; content: React.ReactNode[] }[] {
  const result: { title: string; content: React.ReactNode[] }[] = [];
  let currentGroup: { title: string; content: React.ReactNode[] } | null = null;

  elements.forEach(element => {
    if (isValidElement(element) && element.type === 'h4') {
      if (currentGroup) {
        result.push(currentGroup);
      }
      const title = (element as React.ReactElement<{ children: string }>).props
        .children;

      currentGroup = { title, content: [] };
    } else if (currentGroup) {
      currentGroup.content.push(element);
    }
  });

  if (currentGroup) {
    result.push(currentGroup);
  }

  return result;
}

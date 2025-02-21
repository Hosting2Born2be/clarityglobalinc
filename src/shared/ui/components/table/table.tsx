'use client';

import { cn } from '@/shared/lib/styles';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@/shared/lib/table';

import st from './table.module.css';

export function Table<TData, TColumn>({
  data,
  columns,
  className,
  columnFullWidth = false,
}: {
  data: TData[];
  columns: ColumnDef<TData, TColumn>[];
  columnFullWidth?: boolean;
  className?: string;
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const columnWidth = columnFullWidth ? `${100 / columns.length}%` : undefined;

  return (
    <div className={cn(st.table, className)}>
      <div className={st.headerGroup}>
        {table.getHeaderGroups().map(headerGroup => (
          <div key={headerGroup.id} className={st.headerGroup}>
            {headerGroup.headers.map(header => (
              <div
                key={header.id}
                className={st.header}
                style={{
                  width: columnWidth || header.column.columnDef.size || '100%',
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {table.getRowModel().rows.map(row => (
          <div key={row.id} className={st.rowGroup}>
            {row.getVisibleCells().map(cell => (
              <div
                key={cell.id}
                className={st.row}
                style={{
                  width: columnWidth || cell.column.columnDef.size || '100%',
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

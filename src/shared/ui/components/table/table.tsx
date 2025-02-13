'use client';

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
}: {
  data: TData[];
  columns: ColumnDef<TData, TColumn>[];
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={st.table}>
      <div className={st.headerGroup}>
        {table.getHeaderGroups().map(headerGroup => (
          <div key={headerGroup.id} className={st.headerGroup}>
            {headerGroup.headers.map(header => (
              <div
                key={header.id}
                className={st.header}
                style={{ width: header.column.columnDef.size ?? '100%' }}
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
            {row.getVisibleCells().map(cell => {
              console.log(cell.column.columnDef.size);

              return (
                <div
                  key={cell.id}
                  className={st.row}
                  style={{ width: cell.column.columnDef.size ?? '100%' }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

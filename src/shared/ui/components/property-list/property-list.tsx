'use client';

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@/shared/lib/table';

import st from './property-list.module.css';

export function PropertyList<TData, TProperty>({
  data,
  properties,
}: {
  properties: ColumnDef<TData, TProperty>[];
  data: TData[];
}) {
  const propertyList = useReactTable({
    data,
    columns: properties,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={st.propertyList}>
      <div>
        {propertyList.getHeaderGroups().map(headerGroup => (
          <div key={headerGroup.id} className={st.properties}>
            {headerGroup.headers.map(header => (
              <div key={header.id}>
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
        {propertyList.getRowModel().rows.map(row => (
          <div key={row.id} className={st.row}>
            {row.getVisibleCells().map(cell => (
              <div key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

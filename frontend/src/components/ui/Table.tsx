import { useMemo } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface TableProps {
  columns: ColumnDef<any>[];
  data: any[];
}

export const Table = ({ columns, data }: TableProps) => {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);

  const { getFilteredRowModel, getHeaderGroups } = useReactTable({
    data: tableData,
    columns: tableColumns,
    enableGlobalFilter: true,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const headerGroups = getHeaderGroups();
  const { rows = [] } = getFilteredRowModel();

  return (
    <table className="!w-full border-collapse border border-gray-300">
      <thead>
        {headerGroups.map(({ id, headers }) => (
          <tr key={id} className="bg-gray-100 text-gray-600 font-bold p-2">
            {headers.map(header => (
              <th key={header.id} className="p-2">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody>
        {rows.map(({ getVisibleCells, id }) => (
          <tr key={id} className="border-b border-gray-300 last:border-b-0">
            {getVisibleCells().map(cell => (
              <td key={cell.id} className="px-3 py-2 text-sm text-center">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

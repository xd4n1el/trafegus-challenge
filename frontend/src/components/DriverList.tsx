import { ReactElement } from 'react';
import { useDrivers } from '@/hooks';
import { useNavigate } from 'react-router-dom';

import { Table } from '@/components/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import { TableActions } from '@/components/ui/TableActions';

import { Driver } from '@/types/driver.types';

export const DriverList = (): ReactElement => {
  const navigate = useNavigate();
  const { drivers, removeDriver } = useDrivers();

  const columns: ColumnDef<Driver>[] = [
    {
      accessorKey: 'name',
      header: 'Nome',
    },
    {
      accessorKey: 'cpf',
      header: 'CPF',
    },
    {
      accessorKey: 'phone',
      header: 'Telefone',
    },
    {
      accessorKey: 'vehicle',
      header: 'Veículo',
      cell: ({ row }) => <span>{row.original.vehicle?.plate}</span>,
    },
    {
      accessorKey: 'actions',
      header: 'Ações',
      cell: ({ row }) => (
        <TableActions
          onEdit={() => navigate(`/drivers/${row.original.id}`)}
          onDelete={() => removeDriver(row.original.id)}
        />
      ),
    },
  ];

  return (
    <>
      {drivers.length > 0 && <Table columns={columns} data={drivers} />}

      {drivers.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Nenhum motorista encontrado</p>
        </div>
      )}
    </>
  );
};

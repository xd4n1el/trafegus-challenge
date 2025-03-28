import { ReactElement } from 'react';
import { useVehicles } from '@/hooks';
import { useNavigate } from 'react-router-dom';

import { Table } from '@/components/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import { TableActions } from '@/components/ui/TableActions';

import { Vehicle } from '@/types/vehicle.types';

export const VehicleList = (): ReactElement => {
  const navigate = useNavigate();
  const { vehicles, removeVehicle } = useVehicles();

  const columns: ColumnDef<Vehicle>[] = [
    {
      accessorKey: 'plate',
      header: 'Placa',
    },
    {
      accessorKey: 'model',
      header: 'Modelo',
    },
    {
      accessorKey: 'id',
      header: 'Identificador',
    },
    {
      accessorKey: 'brand',
      header: 'Marca',
    },
    {
      accessorKey: 'year',
      header: 'Ano',
    },
    {
      accessorKey: 'color',
      header: 'Cor',
    },
    {
      accessorKey: 'actions',
      header: 'Ações',
      cell: ({ row }) => (
        <TableActions
          onEdit={() => navigate(`/vehicles/${row.original.id}`)}
          onDelete={() => removeVehicle(row.original.id)}
        />
      ),
    },
  ];

  return (
    <>
      {vehicles.length > 0 && <Table columns={columns} data={vehicles} />}

      {vehicles.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Nenhum veículo encontrado</p>
        </div>
      )}
    </>
  );
};

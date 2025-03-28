import { Vehicle } from '@/types/vehicle.types';

export interface Driver {
  id: string;
  name: string;
  rg: string;
  cpf: string;
  phone?: string;
  vehicle?: Vehicle;
}

import { Driver } from '@/types/driver.types';

export interface Vehicle {
  id: string;
  plate: string;
  renavam: string;
  model: string;
  brand: string;
  year: number;
  color: string;
  drivers: Driver[];
}

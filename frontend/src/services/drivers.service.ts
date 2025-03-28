import { DriverSchema } from '@/schemas/driver.schema';
import { Driver } from '@/types/driver.types';

const API_URL = 'http://localhost:3001';

export const getAllDrivers = async (): Promise<Driver[]> => {
  const response = await fetch(`${API_URL}/drivers`);
  return response.json();
};

export const createDriver = async (driver: DriverSchema): Promise<Driver> => {
  const response = await fetch(`${API_URL}/drivers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(driver),
  });
  return response.json();
};

export const updateDriver = async (
  id: string,
  driver: DriverSchema,
): Promise<Driver> => {
  const response = await fetch(`${API_URL}/drivers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(driver),
  });
  return response.json();
};

export const deleteDriver = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/drivers/${id}`, { method: 'DELETE' });
};

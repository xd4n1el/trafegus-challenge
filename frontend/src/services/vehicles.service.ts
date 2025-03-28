import { VehicleSchema } from '@/schemas/vehicle.schema';
import { Vehicle } from '@/types/vehicle.types';

const API_URL = 'http://localhost:3001';

export const getAllVehicles = async (): Promise<Vehicle[]> => {
  const response = await fetch(`${API_URL}/vehicles`);
  return response.json();
};

export const createVehicle = async (
  vehicle: VehicleSchema,
): Promise<Vehicle> => {
  const response = await fetch(`${API_URL}/vehicles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle),
  });
  return response.json();
};

export const updateVehicle = async (
  id: string,
  vehicle: VehicleSchema,
): Promise<Vehicle> => {
  const response = await fetch(`${API_URL}/vehicles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(vehicle),
  });
  return response.json();
};

export const deleteVehicle = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/vehicles/${id}`, { method: 'DELETE' });
};

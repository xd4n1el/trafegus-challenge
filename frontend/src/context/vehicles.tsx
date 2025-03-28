import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  useTransition,
} from 'react';

import type { Vehicle } from '@/types/vehicle.types';
import * as vehiclesService from '@/services/vehicles.service';
import { VehicleSchema } from '@/schemas/vehicle.schema';

export interface IVehiclesContext {
  vehicles: Vehicle[];
  isLoading: boolean;
  removeVehicle: (id: string) => Promise<void>;
  addVehicle: (vehicle: VehicleSchema) => Promise<void>;
  updateVehicle: (id: string, vehicle: VehicleSchema) => Promise<void>;
  getVehicleById: (id: string) => Vehicle | undefined;
}

const VehiclesContext = createContext({} as IVehiclesContext);

export const VehiclesProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [isLoading, startLoadingTransition] = useTransition();

  const addVehicle = async (vehicle: VehicleSchema) => {
    const newVehicle = await vehiclesService.createVehicle(vehicle);
    setVehicles(state => [...state, newVehicle]);
  };

  const removeVehicle = async (id: string) => {
    await vehiclesService.deleteVehicle(id);
    setVehicles(state => state.filter(v => v.id !== id));
  };

  const updateVehicle = async (id: string, vehicle: VehicleSchema) => {
    const updatedVehicle = await vehiclesService.updateVehicle(id, vehicle);
    setVehicles(state => state.map(v => (v.id === id ? updatedVehicle : v)));
  };

  const getVehicleById = (id: string) => {
    return vehicles.find(v => v.id === id);
  };

  const loadVehicles = async () => {
    startLoadingTransition(async () => {
      try {
        const data = await vehiclesService.getAllVehicles();
        setVehicles(data);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const value: IVehiclesContext = {
    vehicles,
    isLoading,
    addVehicle,
    removeVehicle,
    updateVehicle,
    getVehicleById,
  };

  return (
    <VehiclesContext.Provider value={value}>
      {children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesContext;

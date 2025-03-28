import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  useTransition,
} from 'react';

import * as driversService from '@/services/drivers.service';
import { DriverSchema } from '@/schemas/driver.schema';
import { useVehicles } from '@/hooks';
import { Driver } from '@/types/driver.types';

export interface IDriversContext {
  drivers: Driver[];
  isLoading: boolean;
  removeDriver: (id: string) => Promise<void>;
  addDriver: (driver: DriverSchema) => Promise<void>;
  updateDriver: (id: string, driver: DriverSchema) => Promise<void>;
  getDriverById: (id: string) => Driver | undefined;
}

const DriversContext = createContext({} as IDriversContext);

export const DriversProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const [isLoading, startLoadingTransition] = useTransition();

  const { getVehicleById } = useVehicles();

  const addDriver = async (driver: DriverSchema) => {
    const newDriver = await driversService.createDriver(driver);

    const vehicle = getVehicleById(driver.vehicleId);

    if (vehicle) {
      newDriver.vehicle = vehicle;
    }

    setDrivers(state => [...state, newDriver]);
  };

  const removeDriver = async (id: string) => {
    await driversService.deleteDriver(id);
    setDrivers(state => state.filter(d => d.id !== id));
  };

  const updateDriver = async (id: string, driver: DriverSchema) => {
    const updatedDriver = await driversService.updateDriver(id, driver);
    setDrivers(state => state.map(d => (d.id === id ? updatedDriver : d)));
  };

  const getDriverById = (id: string) => {
    return drivers.find(d => d.id === id);
  };

  const loadDrivers = async () => {
    startLoadingTransition(async () => {
      try {
        const data = await driversService.getAllDrivers();
        setDrivers(data);
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  const value: IDriversContext = {
    drivers,
    isLoading,
    addDriver,
    removeDriver,
    updateDriver,
    getDriverById,
  };

  return (
    <DriversContext.Provider value={value}>{children}</DriversContext.Provider>
  );
};

export default DriversContext;

import { useContext } from 'react';
import DriversContext from '@/context/drivers';

export const useDrivers = () => {
  const context = useContext(DriversContext);

  if (!context) {
    throw new Error('useDrivers must be used within a DriversProvider');
  }

  return context;
};

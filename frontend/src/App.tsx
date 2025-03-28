import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { MapPage } from '@/pages/MapPage';
import { HomePage } from '@/pages/HomePage';
import { DriverPage } from '@/pages/DriverPage';
import { VehiclePage } from '@/pages/VehiclePage';
import { VehiclesPage } from '@/pages/VehiclesPage';
import { DriversPage } from '@/pages/DriversPage';
import { VehiclesProvider } from './context/vehicles';
import { DriversProvider } from './context/drivers';
import { HelmetProvider } from 'react-helmet-async';

const App = (): ReactElement => {
  return (
    <HelmetProvider>
      <VehiclesProvider>
        <DriversProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/map" element={<MapPage />} />

              <Route path="/vehicles" element={<VehiclesPage />} />
              <Route path="/vehicles/:id" element={<VehiclePage />} />

              <Route path="/drivers" element={<DriversPage />} />
              <Route path="/drivers/:id" element={<DriverPage />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </BrowserRouter>
        </DriversProvider>
      </VehiclesProvider>
    </HelmetProvider>
  );
};

export default App;

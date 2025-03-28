import { ReactElement, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Car, Users, Home } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { setDocumentTitle } from '@/utils/browser';
import { Helmet } from 'react-helmet-async';

// Custom div icon using Lucide React's Car icon
const carIcon = new L.DivIcon({
  html: `<div class="bg-gray-800 p-2 rounded-full border-2 border-white shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
      <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.8a1 1 0 0 0-.8.4L2.3 11l-1.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1 4 0m-4 0a2 2 0 1 0 4 0M6 16a2 2 0 1 1 4 0m-4 0a2 2 0 1 0 4 0"/>
    </svg>
  </div>`,
  className: 'custom-div-icon',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20],
});

// Mock data for vehicles
const vehicles = [
  {
    id: '1',
    plate: 'ABC1234',
    position: { lat: -23.55052, lng: -46.633308 }, // Centro de São Paulo
    status: 'active',
  },
  {
    id: '2',
    plate: 'DEF5678',
    position: { lat: -23.56052, lng: -46.643308 }, // Vila Mariana
    status: 'active',
  },
  {
    id: '3',
    plate: 'GHI9012',
    position: { lat: -23.54052, lng: -46.623308 }, // Bela Vista
    status: 'inactive',
  },
  {
    id: '4',
    plate: 'JKL3456',
    position: { lat: -23.57052, lng: -46.653308 }, // Saúde
    status: 'active',
  },
  {
    id: '5',
    plate: 'MNO7890',
    position: { lat: -23.53052, lng: -46.613308 }, // República
    status: 'active',
  },
];

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

// Component to handle map interactions
const MapController = ({ position }: { position: [number, number] }) => {
  const map = useMap();
  map.flyTo(position, 15, {
    duration: 1.5,
    easeLinearity: 0.25,
  });
  return null;
};

export const MapPage = (): ReactElement => {
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number] | null
  >(null);

  const navigate = useNavigate();

  const documentTitle = 'Trafegus - Mapa';

  useEffect(() => {
    setDocumentTitle(documentTitle);
  }, [documentTitle]);

  return (
    <>
      <Helmet title={documentTitle} />

      <div className="min-h-svh w-screen bg-gray-900 text-white relative">
        {/* Header */}
        <div className="absolute top-4 left-20 z-50 flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition-all duration-200 border border-gray-700 shadow-lg">
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition-all duration-200 border border-gray-700 shadow-lg">
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link
              to="/vehicles"
              className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition-all duration-200 border border-gray-700 shadow-lg">
              <Car className="w-5 h-5" />
              Veículos
            </Link>
            <Link
              to="/drivers"
              className="bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-gray-700 transition-all duration-200 border border-gray-700 shadow-lg">
              <Users className="w-5 h-5" />
              Motoristas
            </Link>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full h-screen">
          <MapContainer
            center={[center.lat, center.lng]}
            zoom={12}
            minZoom={7}
            maxZoom={18}
            style={{ width: '100%', height: '100%' }}
            className="w-full h-full">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {vehicles.map(vehicle => (
              <Marker
                key={vehicle.id}
                position={[vehicle.position.lat, vehicle.position.lng]}
                icon={carIcon}>
                <Popup>
                  <div className="bg-gray-800 text-white p-2 rounded-lg">
                    <p className="font-bold">Placa: {vehicle.plate}</p>
                    <p>
                      Status:{' '}
                      {vehicle.status === 'active' ? 'Ativo' : 'Inativo'}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
            {selectedPosition && <MapController position={selectedPosition} />}
          </MapContainer>
        </div>

        {/* Vehicle List Overlay */}
        <div className="absolute bottom-4 left-4 z-10 bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-lg w-64">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-blue-400">
            <Car className="w-5 h-5" />
            Veículos na Mapa
          </h2>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {vehicles.map(vehicle => (
              <button
                key={vehicle.id}
                onClick={() =>
                  setSelectedPosition([
                    vehicle.position.lat,
                    vehicle.position.lng,
                  ])
                }
                className="w-full flex items-center gap-3 text-sm hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-200 group">
                <div className="relative">
                  <div className="bg-gray-800 p-2 rounded-full border border-gray-700 group-hover:border-blue-500 transition-colors duration-200">
                    <Car
                      className={`w-4 h-4 ${vehicle.status === 'active' ? 'text-green-500' : 'text-red-500'}`}
                    />
                  </div>
                  <div
                    className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-gray-800 ${
                      vehicle.status === 'active'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{vehicle.plate}</span>
                  <span className="text-xs text-gray-400">
                    {vehicle.status === 'active' ? 'Em movimento' : 'Parado'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

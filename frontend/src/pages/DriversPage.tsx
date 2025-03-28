import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DriverList } from '@/components/DriverList';
import { PageWrapper } from '@/components/ui/PageWrapper';

import { Plus, Users, ShieldCheck, UserX, Car, Map } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { setDocumentTitle } from '@/utils/browser';

export const DriversPage = (): ReactElement => {
  const navigate = useNavigate();

  const documentTitle = 'Trafegus - Motoristas';

  useEffect(() => {
    setDocumentTitle(documentTitle);
  }, [documentTitle]);

  return (
    <>
      <Helmet title={documentTitle} />

      <PageWrapper>
        <div className="min-h-svh w-screen bg-gray-900 text-white p-10">
          <div className="w-full h-full max-w-6xl mx-auto flex flex-col justify-center">
            <div className="flex flex-col gap-4 bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl">
              {/* Header Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-gray-400" />
                    <div>
                      <h1 className="text-2xl font-bold">Motoristas</h1>
                      <p className="text-gray-400 text-sm">
                        Gerencie seus motoristas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => navigate('/map')}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
                      <Map className="w-5 h-5" />
                      Mapa
                    </button>
                    <button
                      onClick={() => navigate('/vehicles')}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
                      <Car className="w-5 h-5" />
                      Veículos
                    </button>
                    <button
                      onClick={() => navigate('/drivers/new')}
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 transition-all duration-200 border border-gray-700 shadow-lg hover:shadow-xl">
                      <Plus className="w-5 h-5" />
                      Adicionar Motorista
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-sm">Total de Motoristas</p>
                    <Users className="size-5 text-gray-400" />
                  </div>

                  <p className="font-bold">15</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-sm">Motoristas Ativos</p>
                    <ShieldCheck className="size-5 text-green-500" />
                  </div>

                  <p className="font-bold">12</p>
                </div>

                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-400 text-sm">Motoristas Inativos</p>
                    <UserX className="size-5 text-red-500" />
                  </div>

                  <p className="font-bold">3</p>
                </div>
              </div>

              {/* Table Section */}
              <DriverList />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

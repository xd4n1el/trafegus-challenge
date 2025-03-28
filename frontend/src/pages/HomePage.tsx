import { ReactElement, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Car,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
} from 'lucide-react';
import { setDocumentTitle } from '@/utils/browser';
import { Helmet } from 'react-helmet-async';

export const HomePage = (): ReactElement => {
  const documentTitle = 'Trafegus - Home';

  useEffect(() => {
    setDocumentTitle(documentTitle);
  }, [documentTitle]);

  return (
    <>
      <Helmet title={documentTitle} />

      <div className="min-h-svh w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Building2 className="w-10 h-10 text-blue-500" />
              Trafegus
            </h1>
            <p className="text-gray-400 text-lg">
              Sistema de Gerenciamento de Frota
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Vehicles Card */}
            <Link
              to="/vehicles"
              className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Veículos</h2>
                  <p className="text-gray-400">
                    Gerencie sua frota de veículos
                  </p>
                </div>
                <Car className="w-12 h-12 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                Acessar
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>

            {/* Drivers Card */}
            <Link
              to="/drivers"
              className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Motoristas</h2>
                  <p className="text-gray-400">Gerencie seus motoristas</p>
                </div>
                <Users className="w-12 h-12 text-green-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex items-center text-green-400 group-hover:text-green-300 transition-colors duration-300">
                Acessar
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>

          {/* Features Section */}
          <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Recursos Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="font-semibold">Segurança</h3>
                  <p className="text-sm text-gray-400">
                    Monitoramento em tempo real
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="font-semibold">Eficiência</h3>
                  <p className="text-sm text-gray-400">Otimização de rotas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="font-semibold">Rastreamento</h3>
                  <p className="text-sm text-gray-400">Localização precisa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-400 text-sm space-y-2">
            <p>Desenvolvido para o desafio Trafegus</p>
            <p>Author: xd4n1el</p>
          </div>
        </div>
      </div>
    </>
  );
};

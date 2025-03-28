import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DriverSchema, driverSchema } from '@/schemas/driver.schema';
import {
  AlertCircle,
  User,
  Phone,
  CreditCard,
  Save,
  Loader2,
  ArrowLeft,
  Car,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Driver } from '@/types/driver.types';
import { useCallback, useEffect } from 'react';
import { useVehicles } from '@/hooks';

interface DriverFormProps {
  onSubmit: (data: DriverSchema) => void;
  driver?: Driver;
}

export const DriverForm = ({ driver, onSubmit }: DriverFormProps) => {
  const { vehicles } = useVehicles();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DriverSchema>({
    resolver: zodResolver(driverSchema),
  });

  const handleExistingDriver = useCallback(() => {
    if (driver) {
      setValue('name', driver.name);
      setValue('cpf', driver.cpf);
      setValue('rg', driver.rg);
      setValue('phone', driver.phone || '');
    }
  }, [driver]);

  useEffect(() => {
    handleExistingDriver();
  }, [handleExistingDriver]);

  return (
    <div className="min-h-svh w-screen py-10 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white flex items-center justify-center gap-2">
            <User className="w-8 h-8" />
            Cadastro de Motorista
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Preencha os dados do motorista abaixo
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nome Completo
              </label>

              <input
                id="name"
                type="text"
                {...register('name')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="João da Silva"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* CPF Input */}
            <div>
              <label
                htmlFor="cpf"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                CPF
              </label>

              <input
                id="cpf"
                type="text"
                {...register('cpf')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="123.456.789-00"
              />
              {errors.cpf && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.cpf.message}
                </p>
              )}
            </div>

            {/* RG Input */}
            <div>
              <label
                htmlFor="rg"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                RG
              </label>

              <input
                id="rg"
                type="text"
                {...register('rg')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="12.345.678-9"
              />
              {errors.rg && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.rg.message}
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone
              </label>

              <input
                id="phone"
                type="text"
                {...register('phone')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="(11) 99999-9999"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/** Vehicle Select  */}
            <div>
              <label
                htmlFor="vehicle"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Veículo
              </label>

              <select
                id="vehicle"
                {...register('vehicleId')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500">
                {vehicles.map(vehicle => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.plate}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-600 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Salvando...
                </>
              ) : (
                <>
                  <Save className="size-5" />
                  Salvar Motorista
                </>
              )}
            </button>

            <Link
              to="/drivers"
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-600 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl gap-2">
              <ArrowLeft className="size-5" />
              Motoristas
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

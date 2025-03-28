import { ReactElement, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';

import {
  AlertCircle,
  Car,
  Calendar,
  Palette,
  FileText,
  BookOpen,
  Save,
  Loader2,
  ArrowLeft,
} from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { VehicleSchema, vehicleSchema } from '@/schemas/vehicle.schema';
import { Vehicle } from '@/types/vehicle.types';

interface VehicleFormProps {
  vehicle?: Vehicle;
  onSubmit: (data: VehicleSchema) => void;
}

export const VehicleForm = ({
  vehicle,
  onSubmit,
}: VehicleFormProps): ReactElement => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      year: new Date().getFullYear(),
    },
  });

  const handleExistingVehicle = useCallback(() => {
    if (vehicle) {
      setValue('plate', vehicle?.plate as string);
      setValue('renavam', vehicle?.renavam as string);
      setValue('model', vehicle?.model as string);
      setValue('brand', vehicle?.brand as string);
      setValue('year', vehicle?.year as number);
      setValue('color', vehicle?.color as string);
    }
  }, [vehicle]);

  useEffect(() => {
    handleExistingVehicle();
  }, [handleExistingVehicle]);

  return (
    <div className="min-h-svh w-screen py-10 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white flex items-center justify-center gap-2">
            <Car className="w-8 h-8" />
            Cadastro de Veículo
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Preencha os dados do veículo abaixo
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Plate Input */}
            <div>
              <label
                htmlFor="plate"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Placa do Veículo
              </label>

              <input
                id="plate"
                type="text"
                {...register('plate')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
                placeholder="ABC1D234"
              />
              {errors.plate && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.plate.message}
                </p>
              )}
            </div>

            {/* Renavam Input */}
            <div>
              <label
                htmlFor="renavam"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Renavam
              </label>

              <input
                id="renavam"
                type="text"
                {...register('renavam')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
              />
              {errors.renavam && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.renavam.message}
                </p>
              )}
            </div>

            {/* Model Input */}
            <div>
              <label
                htmlFor="model"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Modelo
              </label>

              <input
                id="model"
                type="text"
                {...register('model')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
              />
              {errors.model && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.model.message}
                </p>
              )}
            </div>

            {/* Brand Input */}
            <div>
              <label
                htmlFor="brand"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Car className="w-4 h-4" />
                Marca
              </label>

              <input
                id="brand"
                type="text"
                {...register('brand')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
              />
              {errors.brand && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.brand.message}
                </p>
              )}
            </div>

            {/* Year Input */}
            <div>
              <label
                htmlFor="year"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Ano
              </label>

              <input
                id="year"
                type="number"
                {...register('year', { valueAsNumber: true })}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
              />
              {errors.year && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.year.message}
                </p>
              )}
            </div>

            {/* Color Input */}
            <div>
              <label
                htmlFor="color"
                className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                <Palette className="w-4 h-4" />
                Cor
              </label>

              <input
                id="color"
                type="text"
                {...register('color')}
                className="mt-1 block w-full px-4 py-2 bg-gray-900 border-2 border-gray-700 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-200 text-white placeholder-gray-500"
              />
              {errors.color && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.color.message}
                </p>
              )}
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
                  Salvar Veículo
                </>
              )}
            </button>

            <Link
              to="/vehicles"
              className="w-full flex justify-center items-center py-3 px-4 border border-gray-600 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl gap-2">
              <ArrowLeft className="size-5" />
              Veículos
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

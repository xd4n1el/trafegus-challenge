import { z } from 'zod';
import { driverSchema } from './driver.schema';

export const vehicleSchema = z.object({
  plate: z
    .string()
    .min(1, 'Placa é obrigatória')
    .max(10, 'Placa deve ter no máximo 10 caracteres'),
  renavam: z
    .string()
    .min(1, 'Renavam é obrigatório')
    .max(30, 'Renavam deve ter no máximo 30 caracteres'),
  model: z
    .string()
    .min(1, 'Modelo é obrigatório')
    .max(100, 'Modelo deve ter no máximo 100 caracteres'),
  brand: z
    .string()
    .min(1, 'Marca é obrigatória')
    .max(100, 'Marca deve ter no máximo 100 caracteres'),
  year: z.number().min(1900, 'Ano deve ser maior que 1900'),
  color: z
    .string()
    .min(1, 'Cor é obrigatória')
    .max(100, 'Cor deve ter no máximo 100 caracteres'),
  drivers: z.array(driverSchema).optional(),
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;

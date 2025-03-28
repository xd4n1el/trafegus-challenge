import { z } from 'zod';

export const driverSchema = z.object({
  name: z
    .string()
    .min(1, 'Nome é obrigatório')
    .max(100, 'Nome deve conter no máximo 100 caracteres'),
  cpf: z
    .string()
    .min(1, 'CPF é obrigatório')
    .max(11, 'CPF deve conter 11 dígitos'),
  rg: z.string().min(1, 'RG é obrigatório').max(9, 'RG deve conter 9 dígitos'),
  vehicleId: z.string().min(1, 'Veículo é obrigatório'),
  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .max(15, 'Telefone deve conter no máximo 15 dígitos'),
});

export type DriverSchema = z.infer<typeof driverSchema>;

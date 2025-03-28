import 'reflect-metadata';
import  { Router } from 'express';

import { validateDTO } from '@/middlewares/validate-dto';
import { VehicleController } from '@/controllers/vehicle.controller';
import { CreateVehicleDTO, UpdateVehicleDTO } from '@/dtos/vehicle.dto';

const vehiclesRouter = Router();

const vehicleController = new VehicleController();

vehiclesRouter.post('/', validateDTO(CreateVehicleDTO), vehicleController.create.bind(vehicleController));
vehiclesRouter.put('/:id', validateDTO(UpdateVehicleDTO), vehicleController.update.bind(vehicleController));
vehiclesRouter.get('/', vehicleController.findAll.bind(vehicleController));
vehiclesRouter.get('/:id', vehicleController.findById.bind(vehicleController));
vehiclesRouter.delete('/:id', vehicleController.delete.bind(vehicleController));

export default vehiclesRouter;
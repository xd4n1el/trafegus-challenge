import 'reflect-metadata';
import { Router } from 'express';

import { validateDTO } from '@/middlewares/validate-dto';
import { DriverController } from '@/controllers/driver.controller';
import { CreateDriverDTO, UpdateDriverDTO } from '@/dtos/driver.dto';

const driversRouter = Router();

const driverController = new DriverController();

driversRouter.post('/', validateDTO(CreateDriverDTO), driverController.create.bind(driverController));
driversRouter.put('/:id', validateDTO(UpdateDriverDTO), driverController.update.bind(driverController));
driversRouter.get('/', driverController.findAll.bind(driverController));
driversRouter.get('/:id', driverController.findById.bind(driverController));
driversRouter.delete('/:id', driverController.delete.bind(driverController));

export default driversRouter;
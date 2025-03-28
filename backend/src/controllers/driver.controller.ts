import { Request, Response } from 'express';
import { DriverService } from '../services/driver.service';
import { CreateDriverDTO, UpdateDriverDTO } from '../dtos/driver.dto';

export class DriverController {
  private driverService: DriverService;

  constructor() {
    this.driverService = new DriverService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as CreateDriverDTO;
    const driver = await this.driverService.create(data);
    return res.status(201).json(driver);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const drivers = await this.driverService.findAll();
    return res.json(drivers);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const driver = await this.driverService.findById(id);
    
    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    return res.json(driver);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body as UpdateDriverDTO;
    const driver = await this.driverService.update(id, data);

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found' });
    }

    return res.json(driver);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.driverService.delete(id);
    return res.status(204).send();
  }
} 
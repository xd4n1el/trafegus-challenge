import { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle.service';
import { CreateVehicleDTO, UpdateVehicleDTO } from '../dtos/vehicle.dto';

export class VehicleController {
  private service: VehicleService;

  constructor() {
    this.service = new VehicleService();
  }

  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as CreateVehicleDTO;
    const vehicle = await this.service.create(data);
    return res.status(201).json(vehicle);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const vehicles = await this.service.findAll();
    return res.json(vehicles);
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const vehicle = await this.service.findById(id);
    
    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    return res.json(vehicle);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data = req.body as UpdateVehicleDTO;
    const vehicle = await this.service.update(id, data);

    if (!vehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    return res.json(vehicle);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.service.delete(id);
    return res.status(204).send();
  }
} 
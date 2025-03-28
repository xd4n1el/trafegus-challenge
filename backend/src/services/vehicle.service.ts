import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Vehicle } from '../entities/vehicle.entity';
import { CreateVehicleDTO, UpdateVehicleDTO } from '../dtos/vehicle.dto';

export class VehicleService {
  private repository: Repository<Vehicle>;

  constructor() {
    this.repository = AppDataSource.getRepository(Vehicle);
  }

  async create(data: CreateVehicleDTO): Promise<Vehicle> {
    const vehicle = this.repository.create(data);
    return await this.repository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Vehicle | null> {
    return await this.repository.findOneBy({ id });
  }

  async update(id: string, data: UpdateVehicleDTO): Promise<Vehicle | null> {
    await this.repository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
} 
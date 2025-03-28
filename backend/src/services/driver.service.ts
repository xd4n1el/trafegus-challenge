import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Driver } from '../entities/driver.entity';
import { CreateDriverDTO, UpdateDriverDTO } from '../dtos/driver.dto';

export class DriverService {
  private repository: Repository<Driver>;

  constructor() {
    this.repository = AppDataSource.getRepository(Driver);
  }

  async create(data: CreateDriverDTO): Promise<Driver> {
    const driver = this.repository.create({
      ...data,
      vehicle: { id: data.vehicleId }
    });
    return await this.repository.save(driver);
  }

  async findAll(): Promise<Driver[]> {
    return await this.repository.find({
      relations: ['vehicle']
    });
  }

  async findById(id: string): Promise<Driver | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['vehicle']
    });
  }

  async update(id: string, data: UpdateDriverDTO): Promise<Driver | null> {
    await this.repository.update(id, {
      ...data,
      vehicle: { id: data.vehicleId }
    });
    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
} 
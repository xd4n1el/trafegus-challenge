import { DataSource } from 'typeorm';
import { Vehicle } from '@/entities/vehicle.entity';
import { Driver } from '@/entities/driver.entity';

import 'dotenv/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'trafegus',
  password: process.env.DB_PASSWORD || 'trafegus123',
  database: process.env.DB_NAME || 'trafegus_db',
  synchronize: true,
  logging: true,
  entities: [Vehicle, Driver],
  subscribers: [],
  migrations: [],
}); 
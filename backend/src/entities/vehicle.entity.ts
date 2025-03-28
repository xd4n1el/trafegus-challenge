import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Driver } from '@/entities/driver.entity';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 7 })
  plate!: string;

  @Column({ length: 30 })
  renavam!: string;

  @Column({ length: 20 })
  model!: string;

  @Column({ length: 20 })
  brand!: string;

  @Column()
  year!: number;

  @Column({ length: 20 })
  color!: string;

  @OneToMany(() => Driver, driver => driver.vehicle)
  drivers!: Driver[];
} 
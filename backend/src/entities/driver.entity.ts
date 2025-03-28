import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity('drivers')
export class Driver {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 200 })
  name!: string;

  @Column({ length: 20 })
  rg!: string;

  @Column({ length: 11 })
  cpf!: string;

  @Column({ length: 20, nullable: true })
  phone!: string;

  @ManyToOne(() => Vehicle, vehicle => vehicle.drivers)
  vehicle!: Vehicle;
} 
import { IsString, IsNumber, MinLength, MaxLength } from 'class-validator';

export class CreateVehicleDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(7)
  plate!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  renavam!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  model!: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  brand!: string;

  @IsNumber()
  year!: number;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  color!: string;
}

export class UpdateVehicleDTO extends CreateVehicleDTO {} 
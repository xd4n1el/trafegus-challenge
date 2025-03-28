import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateDriverDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  name!: string;

  @IsString()
  @MaxLength(20)
  rg!: string;

  @IsString()
  @MaxLength(11)
  cpf!: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  phone?: string;

  @IsString()
  vehicleId!: string;
}

export class UpdateDriverDTO extends CreateDriverDTO {} 
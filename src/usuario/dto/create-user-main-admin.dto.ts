import { PerfilUsuarioEnum } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

@Exclude()
export class CreateUserMainAdminDTO extends CreateUserDTO {
  @Expose()
  @IsOptional()
  @IsEnum(PerfilUsuarioEnum)
  tipo: PerfilUsuarioEnum;
}

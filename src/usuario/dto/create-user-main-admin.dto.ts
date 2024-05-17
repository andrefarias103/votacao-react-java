import { Exclude, Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

@Exclude()
export class CreateUserMainAdminDTO extends CreateUserDTO {
  @Expose()
  @IsOptional()
  tipo: string;
}

import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';
import { UserProfileEnum } from '../enums/user-profile.enum';
import { CreateUserDTO } from './create-user.dto';

@Exclude()
export class CreateUserMainAdminDTO extends CreateUserDTO {
  @Expose()
  @IsOptional()
  @IsEnum(UserProfileEnum)
  tipo: UserProfileEnum;
}

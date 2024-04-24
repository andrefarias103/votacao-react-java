import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListUserDTO {
  @Expose()
  login: string;
  @Expose()
  nome: string;
}

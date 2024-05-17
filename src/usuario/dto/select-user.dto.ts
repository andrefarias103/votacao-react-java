import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListUserDTO {
  @Expose()
  login: string;
  @Expose()
  nome: string;
  @Expose()
  email: string;
  @Expose()
  cpf: string;  
  @Expose()
  tipo: string;    
}

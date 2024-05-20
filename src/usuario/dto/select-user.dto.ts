import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListUserDTO {
  @Expose()
  id: string;
  @Expose()
  login: string;
  @Expose()
  senha: string;     
  @Expose()
  nome: string;
  @Expose()
  endereco: string;     
  @Expose()
  email: string;
  @Expose()
  cpf: string;  
  @Expose()
  tipo: string;    
}

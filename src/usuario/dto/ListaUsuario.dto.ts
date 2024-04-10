import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListaUsuarioDTO {
  @Expose()
  login: string;
  @Expose()
  nome: string;
}

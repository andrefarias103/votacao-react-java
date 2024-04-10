import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListCategoriaDto {
  @Expose()
  nome: string;
  @Expose()
  descricao: string;
}

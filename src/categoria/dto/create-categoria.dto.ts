import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class CreateCategoriaDto {
  @Expose()
  @IsNotEmpty()
  nome: string;

  @Expose()
  @IsOptional()
  descricao: string;

}

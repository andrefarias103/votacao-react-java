import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

@Exclude()
export class CreateCategoryDto {
  @Expose()
  @IsNotEmpty()
  nome: string;

  @Expose()
  @IsOptional()
  descricao: string;
}

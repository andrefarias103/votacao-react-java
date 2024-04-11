import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";
import { CreateCategoriaDto } from "src/categoria/dto/create-categoria.dto";

@Exclude()
export class CreatePautaDto {
    @Expose()
    @IsNotEmpty()
    titulo: string;

    @Expose()
    @IsOptional()
    descricao: string;

    @Expose()
    categoriaId: CreateCategoriaDto;
}

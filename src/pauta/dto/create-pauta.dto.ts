import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

@Exclude()
export class CreatePautaDto {
    @Expose()
    @IsNotEmpty()
    titulo: string;

    @Expose()
    @IsOptional()
    descricao: string;
}

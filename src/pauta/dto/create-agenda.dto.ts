import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

@Exclude()
export class CreateAgendaDto {
    @Expose()
    @IsNotEmpty()
    titulo: string;

    @Expose()
    @IsOptional()
    descricao: string;
}

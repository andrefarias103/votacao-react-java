import { IsNotEmpty, IsOptional } from "class-validator";
import { CreateSessionDto } from "../../sessao/dto/create-session.dto";

export class CreateAgendaDto extends CreateSessionDto {
    @IsNotEmpty()
    titulo: string;

    @IsOptional()
    descricao: string;

    @IsNotEmpty()
    categoriaId: number;
}

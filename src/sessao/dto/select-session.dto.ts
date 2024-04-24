import { Exclude, Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ListAgendaDto } from '../../pauta/dto/select-agenda.dto';

@Exclude()
export class ListSessionDto {
    @Expose()
    dataHoraInicio: string;
    
    @Expose()
    dataHoraFim: string;

    @Expose()
    status: string;

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListAgendaDto)
    pauta?: ListAgendaDto[]

}

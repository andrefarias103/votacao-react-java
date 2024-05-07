import { Exclude, Expose } from 'class-transformer';


@Exclude()
export class ListSessionDto {
    @Expose()
    dataHoraInicio: string;
    
    @Expose()
    dataHoraFim: string;

    @Expose()
    status: string;

    // @Expose()
    // @IsOptional()
    // @ValidateNested()
    // @Type(() => ListAgendaDto)
    // pauta?: ListAgendaDto[]

}

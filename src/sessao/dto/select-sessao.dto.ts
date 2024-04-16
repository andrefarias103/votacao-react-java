import { Exclude, Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ListPautaDto } from 'src/pauta/dto/select-pauta.dto';

@Exclude()
export class ListSessaoDto {
    @Expose()
    dataHoraInicio: string;
    
    @Expose()
    dataHoraFim: string;

    @Expose()
    status: string;

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListPautaDto)
    pauta?: ListPautaDto[]

}

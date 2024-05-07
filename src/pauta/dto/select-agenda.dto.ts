import { Exclude, Expose, Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ListCategoryDto } from '../../categoria/dto/select-categoria.dto';
import { ListSessionDto } from '../../sessao/dto/select-session.dto';

@Exclude()
export class ListAgendaDto {
    @Expose()
    titulo: string;

    @Expose()
    descricao: string;

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListCategoryDto)
    categoria?: ListCategoryDto    

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListSessionDto)
    Sessao?: ListSessionDto        


}

import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { ListCategoryDto } from '../../categoria/dto/select-categoria.dto';
import { ListSessionDto } from '../../sessao/dto/select-session.dto';
import { ListVotacionDto } from '../../votacao/dto/select-votation.dto';

@Exclude()
export class ListAgendaDto {
    @Expose()
    id: number
        
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

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListVotacionDto)
    votacao?: ListVotacionDto    
    
    @Expose()
    @IsOptional()
    @IsNumber()
    quantidadeVotos?: number;

}

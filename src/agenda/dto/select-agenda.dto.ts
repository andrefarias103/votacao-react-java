import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { ListCategoryDto } from '../../category/dto/select-category.dto';
import { ListSessionDto } from '../../session/dto/select-session.dto';
import { ListVotacionDto } from '../../votation/dto/select-votation.dto';

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
    categoriaId?: number        

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListSessionDto)
    Sessao?: ListSessionDto       
    
    @Expose()
    @IsOptional()
    sessaoId?: number       

    @Expose()
    @IsOptional()
    usuarioId?: number          

    @Expose()
    @IsOptional()
    @ValidateNested()
    @Type(() => ListVotacionDto)
    votacao?: ListVotacionDto    

    @Expose()
    @IsOptional()
    votacaoId?: number      
    
    @Expose()
    @IsOptional()
    @IsNumber()
    quantidadeVotos?: number;

}

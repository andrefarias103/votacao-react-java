import { Exclude, Expose, Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { ListPautaDto } from '../../pauta/dto/select-pauta.dto';

@Exclude()
export class ListCategoriaDto {
  @Expose()
  nome: string;

  @Expose()
  descricao: string;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @ArrayMinSize(0)
  @IsArray()
  @Type(() => ListPautaDto)
  pauta?: ListPautaDto[]
}

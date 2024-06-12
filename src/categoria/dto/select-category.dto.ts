import { Exclude, Expose, Type } from "class-transformer";
import {
  ArrayMinSize,
  IsArray,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ListAgendaDto } from "../../pauta/dto/select-agenda.dto";

@Exclude()
export class ListCategoryDto {
  @Expose()
  id: number;

  @Expose()
  nome: string;

  @Expose()
  descricao: string;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @ArrayMinSize(0)
  @IsArray()
  @Type(() => ListAgendaDto)
  pauta?: ListAgendaDto[];
}

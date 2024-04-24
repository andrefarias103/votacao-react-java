import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListAgendaDto {
    @Expose()
    titulo: string;

    @Expose()
    descricao: string;

    @Expose()
    categoriaId: number;
}

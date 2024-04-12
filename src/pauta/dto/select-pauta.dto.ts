import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ListPautaDto {
    @Expose()
    titulo: string;

    @Expose()
    descricao: string;

    @Expose()
    categoriaId: number;
}

import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ResultVotation {
    @Expose()
    pautaId: number;
    @Expose()
    quantidadeVotos: number;
    @Expose()
    quantidadeVotosSim: number;
    @Expose()
    quantidadeVotosNao: number;
    @Expose()
    resultado: string; 
}
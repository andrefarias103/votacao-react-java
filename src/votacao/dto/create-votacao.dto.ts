import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class CreateVotacaoDto {    

    @Expose()
    @IsNotEmpty()
    opcaoVotada: string

    // @Expose()
    // @IsNotEmpty()
    // dataHoraVoto: string

    // @Expose()
    // @IsNotEmpty()
    // usuarioId: number; 

    // @Expose()
    // @IsNotEmpty()
    // pautaId: number;    

}

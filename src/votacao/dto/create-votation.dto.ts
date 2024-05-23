import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class CreateVotationDto {    

    @Expose()
    @IsNotEmpty()
    opcaoVotada: string

    // @Expose()
    // @IsNotEmpty()
    // dataHoraVoto: string

    @Expose()
    @IsNotEmpty()
    pautaId: number; 

    // @Expose()
    // @IsNotEmpty()
    // usuarioId: number;    

}

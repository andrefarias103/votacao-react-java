import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

@Exclude()
export class CreateSessaoDto {
    @Expose()
    @IsNotEmpty() 
    dataHoraInicio: string;
    
    @Expose()
    @IsNotEmpty()
    dataHoraFim: string;

    @Expose()
    @IsNotEmpty()
    status: string;

}

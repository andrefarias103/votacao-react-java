import { Exclude, Expose } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

@Exclude()
export class CreateSessaoDto {
    @Expose()
    @IsNotEmpty() 
    @IsDate()
    dataHoraInicio: string;
    
    @Expose()
    @IsNotEmpty()
    @IsDate()
    dataHoraFim: string;

    @Expose()
    @IsNotEmpty()
    status: string;

}

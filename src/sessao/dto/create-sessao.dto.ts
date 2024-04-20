import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
//import moment from "moment";

@Exclude()
export class CreateSessaoDto {
    @Expose()    
    @IsString()
    @IsNotEmpty() 
    @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, { message: "Data Hora Inicio deve estar no formato YYY-MM-DD HH:mm:ss" })
    dataHoraInicio: string;
    
    @Expose()
    @IsOptional()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, { message: "Data Hora Fim deve estar no formato YYY-MM-DD HH:mm:ss" })
    dataHoraFim: string;

    // @Expose()
    // @IsNotEmpty()
    // status: string;

}

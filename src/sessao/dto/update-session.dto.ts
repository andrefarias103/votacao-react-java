import { Exclude, Expose } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { StatusSessionEnum } from "../enums/status-session.enum";

@Exclude()
export class UpdateSessionDto {
    @Expose()    
    @IsOptional()
    @IsString()
    @IsNotEmpty() 
    @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, { message: "Data Hora Inicio deve estar no formato YYY-MM-DD HH:mm:ss" })
    dataHoraInicio: string;
    
    @Expose()
    @IsOptional()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/, { message: "Data Hora Fim deve estar no formato YYY-MM-DD HH:mm:ss" })
    dataHoraFim: string;

    @Expose()
    @IsOptional()
    @IsEnum(StatusSessionEnum)
    status: StatusSessionEnum;

}

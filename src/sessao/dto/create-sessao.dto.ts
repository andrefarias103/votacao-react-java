import { Exclude, Expose, Type } from "class-transformer";
import { IsDate, IsNotEmpty } from "class-validator";

@Exclude()
export class CreateSessaoDto {
    @Expose()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)     
    dataHoraInicio: Date;
    
    @Expose()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)     
    dataHoraFim: Date;

    @Expose()
    @IsNotEmpty()
    status: string;

}

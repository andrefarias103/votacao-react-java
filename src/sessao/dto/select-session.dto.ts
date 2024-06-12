import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ListSessionDto {
  @Expose()
  id: string;

  @Expose()
  dataHoraInicio: string;

  @Expose()
  dataHoraFim: string;

  @Expose()
  status: string;
}

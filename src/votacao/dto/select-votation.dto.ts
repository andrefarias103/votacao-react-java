import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ListVotacionDto {
  @Expose()
  opcaoVotada: string;

  @Expose()
  dataHoraVoto: string;
}

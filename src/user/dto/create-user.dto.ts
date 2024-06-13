import { Exclude, Expose } from "class-transformer";
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  Matches,
} from "class-validator";
import { UserProfileEnum } from "../enums/user-profile.enum";
import { ValidationCPF } from "../validation/cpf.validator";

@Exclude()
export class CreateUserDTO {
  @Expose()
  @IsNotEmpty({ message: "Login deve ser informado" })
  login: string;

  @Expose()
  @IsNotEmpty({
    message: "A senha deve ser informada",
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+)(.{8,30})$/, {
    message:
      "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres",
  })
  senha: string;

  @Expose()
  @IsNotEmpty()
  nome: string;

  @Expose()
  @IsOptional()
  endereco: string;

  @Expose()
  @IsNotEmpty()
  @IsEmail(undefined, { message: "O email deve ser informado" })
  email: string;

  @Expose()
  @IsNotEmpty()
  @ValidationCPF({ message: "CPF Inválido" })
  cpf: string;

  @Expose()
  @IsNotEmpty()
  @IsEnum(UserProfileEnum)
  tipo: UserProfileEnum;
}

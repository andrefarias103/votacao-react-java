import { PerfilUsuarioEnum } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { ValidationCPF } from '../validation/cpf.validator';

@Exclude()
export class CreateUserDTO {
  @Expose()
  @IsNotEmpty({ message: 'Login deve ser informado' })
  login: string;

  @Expose()
  @IsNotEmpty({
    message: 'A senha deve ser informada',
  })
  @MinLength(8, { message: 'A senha deve conter 8 caracteres' })
  senha: string;

  @Expose()
  @IsNotEmpty()
  nome: string;

  @Expose()
  @IsOptional()
  endereco: string;

  @Expose()
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'O email deve ser informado' })
  email: string;

  @Expose()
  @IsNotEmpty()
  @ValidationCPF({ message: 'CPF Inválido' })
  cpf: string;

  @Expose()
  @IsNotEmpty()
  @IsEnum(PerfilUsuarioEnum)
  tipo: PerfilUsuarioEnum;
  
}

import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

@Exclude()
export class CriaUsuarioDTO {
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

  @IsOptional()
  endereco: string;

  @Expose()
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'O email deve ser informado' })
  email: string;

  @Expose()
  @IsNotEmpty()
  cpf: string;

  @Expose()
  @IsNotEmpty()
  tipo: string;

  // createdAt: Date;
  // updatedAt: Date;
  // deletedAt: Date;
}

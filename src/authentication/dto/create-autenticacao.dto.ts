import { IsNotEmpty } from 'class-validator';

export class AutenticaDTO {
  @IsNotEmpty({ message: 'Login deve ser informado' })
  login: string;

  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  senha: string;
}
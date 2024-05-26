import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { AutenticaDTO } from './dto/create-autenticacao.dto';

@Controller('autenticacao')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('login')
  async loginToTheSystem(@Body() { login, senha }: AutenticaDTO) {
    return await this.authenticationService.loginToTheSystem(login, senha);
  }

  @Post('cpf')
  async validateCPF(@Body() { cpf }): Promise<boolean>  {
    console.log('cpf: ', cpf);
    return await this.authenticationService.validateCPF(cpf);
  }

  @Post('validacao')
  async validateToken(payload: any) {
    return await this.authenticationService.validateToken(payload);
  }



}

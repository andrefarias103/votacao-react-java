import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserInfo } from 'src/utils/userInfo.utils';
import { AuthenticationGuard } from './authentication.guard';
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

  @Get('profile')
  @UseGuards(AuthenticationGuard) 
  async validateToken(@UserInfo() user: any) {
    return user;
  }

}

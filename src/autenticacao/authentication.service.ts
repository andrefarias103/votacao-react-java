import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bCrypt from 'bcrypt';
import { UserService } from './../usuario/user.service';

export interface UserPayload {
  sub: number;
  username: string;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async loginToTheSystem(login: string, senhaInserida: string) {
    const user = await this.userService.findUserByLogin(login);

    const isAuthenticated = await bCrypt.compare(
      senhaInserida,
      user.senha,
    );

    if (!isAuthenticated) {
      throw new UnauthorizedException('Login ou senha não conferem');
    }

    const payload: UserPayload = {
      sub: user.id,
      username: user.nome,
    };

    return {
      login: user.login,
      id: user.id,
      name: user.nome,
      token_acesso: await this.jwtService.signAsync(payload),
    };
  }

  ///
  async validateCPF(cpf: string): Promise<boolean>   {
    const user = await this.userService.findUserByCpf(cpf);
    console.log(user);
    if (!user) {
      return false;
    }
    return true;
  }
  
  ///
  async validateToken(payload: any) {

    return {
      id: payload.sub,
      name: payload.username,
    };
  }  
}

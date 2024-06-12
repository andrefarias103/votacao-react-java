import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";
import { ListUserDTO } from "../usuario/dto/select-user.dto";
import { UserService } from "../usuario/user.service";
import { UserPayload } from "./authentication.service";

export interface RequestWithUser extends Request {
  user: ListUserDTO;
}

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.extractTokenHeader(request);

    if (!token) {
      throw new UnauthorizedException("Erro nas credenciais");
    }
    try {
      const payload: UserPayload = await this.jwtService.verifyAsync(token);

      const user = await this.userService.findUserById(payload.sub);

      request.user = user;
    } catch (error) {
      throw new UnauthorizedException("JWT inválido");
    }
    return true;
  }

  private extractTokenHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}

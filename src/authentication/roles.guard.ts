import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ListUserDTO } from "../user/dto/select-user.dto";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>("roles", context.getHandler());
    if (!roles) {
      return true;
    }

    console.log("roles: ", roles);

    const request = context.switchToHttp().getRequest();
    const user = request.user as ListUserDTO;
    console.log("🚀 ~ RolesGuard ~ canActivate ~ user:", user);

    if (!user) {
      return false;
    }

    return roles.includes(user.tipo);
  }
}

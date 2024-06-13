import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { HashearSenhaPipe } from "../resource/pipes/hashear-password.pipe";
import { AuthenticationGuard } from "./../authentication/authentication.guard";
import { Roles } from "./../authentication/roles";
import { RolesGuard } from "./../authentication/roles.guard";
import { CreateUserMainAdminDTO } from "./dto/create-user-main-admin.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { ListUserDTO } from "./dto/select-user.dto";
import { UserProfileEnum } from "./enums/user-profile.enum";
import { UserService } from "./user.service";

@Controller("usuario")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async createUser(
    @Body() { senha, ...dataUser }: CreateUserDTO,
    @Body("senha", HashearSenhaPipe) senhaHasheada: string,
  ) {
    const createdUser = await this.userService.createUser({
      ...dataUser,
      senha: senhaHasheada,
    });
    return {
      usuario: createdUser,
      message: "Usuário criado com sucesso!",
    };
  }

  @Post("/main_admin/")
  @UseGuards(AuthenticationGuard, RolesGuard)
  async createUserMainAdmin(
    @Body() dataUser: CreateUserMainAdminDTO,
  ): Promise<CreateUserMainAdminDTO> {
    return this.userService.createUserMainAdmin(dataUser);
  }

  @Get("/filtro_id/:id")
  async findUserById(@Param("id") id: number) {
    return await this.userService.findUserById(id);
  }

  @Get("/filtro_nome/:nome")
  async findUserByName(@Param("nome") nome: string) {
    return await this.userService.findUserByName(nome);
  }

  @Get("/filtro_perfil")
  async findUserProfile(): Promise<string[]> {
    const profile = await this.userService.findUserProfile();
    return profile;
  }

  @Get(":login")
  async findUserByLogin(@Param("login") login: string) {
    return await this.userService.findUserByLogin(login);
  }

  @Get()
  async findAllUsers(): Promise<ListUserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Put(":id")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async updateUser(
    @Param("id") id: number,
    @Body() dataCategory: CreateUserDTO,
  ) {
    return await this.userService.updateUser(id, dataCategory);
  }

  @Delete(":id")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async deleteUser(@Param("id") id: number) {
    return await this.userService.deleteUser(id);
  }
}

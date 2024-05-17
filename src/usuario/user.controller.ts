import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserMainAdminDTO } from './dto/create-user-main-admin.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUserDTO } from './dto/select-user.dto';
import { UserService } from './user.service';

@Controller('/usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post(':id')
  async createUser(@Param('id') userId: number, @Body() dataUser: CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.createUser(userId, dataUser);
  }

  @Post('/main_admin')
  async createUserMainAdmin(@Body() dataUser: CreateUserMainAdminDTO): Promise<CreateUserMainAdminDTO> {
    return this.userService.createUserMainAdmin(dataUser);
  }

  @Get('/filtro_id/:id')
  async findUserById(@Param('id') id: number) {
    return await this.userService.findUserById(id);
  }

  @Get('/filtro_nome/:nome')
  async findUserByName(@Param('nome') nome: string) {
    return await this.userService.findUserByName(nome);
  }  

  @Get()
  async findAllUsers(): Promise<ListUserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() dataCategory: CreateUserDTO) {
    return await this.userService.updateUser(id, dataCategory);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(id);
  }  

}

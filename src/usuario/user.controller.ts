import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUserDTO } from './dto/select-user.dto';
import { UserService } from './user.service';

@Controller('/usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<ListUserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Post()
  async createUser(@Query() userId: number, @Body() dataUser: CreateUserDTO): Promise<CreateUserDTO> {
    return this.userService.createUser(userId, dataUser);
  }
}

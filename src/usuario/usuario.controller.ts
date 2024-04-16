import { Body, Controller, Get, Post } from '@nestjs/common';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { CriaUsuarioDTO } from './dto/cria-usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  async findAllUsers(): Promise<ListaUsuarioDTO[]> {
    return this.usuarioService.findAllUsers();
  }

  @Post()
  async createUser(@Body() dadosUsuario: CriaUsuarioDTO): Promise<CriaUsuarioDTO> {
    return this.usuarioService.createUser(dadosUsuario);
  }
}

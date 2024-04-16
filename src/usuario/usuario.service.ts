import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { CriaUsuarioDTO } from './dto/cria-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  public async findAllUsers(): Promise<ListaUsuarioDTO[]> {
    const users: ListaUsuarioDTO[] = await this.prisma.usuario.findMany();
    if (users === null) {
      throw new NotFoundException('Nenhum usuário foi encontrada')
    }; 

    return users.map((user) => ({
      login: user.login,
      nome: user.nome,
    }));
  }

  async createUser(dadosUsuario: CriaUsuarioDTO): Promise<CriaUsuarioDTO> {
    try {
      const newUser: CriaUsuarioDTO = await this.prisma.usuario.create({
        data: {
          login: dadosUsuario.login,
          senha: dadosUsuario.senha,
          nome: dadosUsuario.nome,
          endereco: dadosUsuario.endereco || '',
          email: dadosUsuario.email,
          cpf: dadosUsuario.cpf,
          tipo: dadosUsuario.tipo,
        },
      });
      return newUser;
    }
    catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
  }
  }
}

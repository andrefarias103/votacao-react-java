import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { CriaUsuarioDTO } from './dto/cria-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly repository: TRepository) {
    
    this.repository = new TRepository('usuario');
  }

  public async findAllUsers(): Promise<ListaUsuarioDTO[]> {
    const users: ListaUsuarioDTO[] = await this.repository.findAll();
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
      const user: CriaUsuarioDTO = await this.repository.create({
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
      return user;
    }
    catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
  }
  }
}

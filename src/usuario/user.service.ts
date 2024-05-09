import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUserDTO } from './dto/select-user.dto';
import { UserPerfilEnum } from './enums/user-perfil.enum';

@Injectable()
export class UserService {
  constructor(private readonly repository: TRepository) {
    
    this.repository = new TRepository('usuario');
  }

  public async findAllUsers(): Promise<ListUserDTO[]> {
    const users: ListUserDTO[] = await this.repository.findAll();
    if (users === null) {
      throw new NotFoundException('Nenhum usuário foi encontrada')
    }; 

    return users.map((user) => ({
      login: user.login,
      nome: user.nome,
    }));
  }

  async createUser(userId: number, dataUser: CreateUserDTO): Promise<CreateUserDTO> {
    try {

      const memberUser = await this.repository.findById({ where: { id: userId}});
      if (memberUser === null) {
        throw new NotFoundException('Usuário administrador foi encontrado');
      }  

      if (memberUser.tipo === UserPerfilEnum.PERFIL_USUARIO_COMUM) {
        throw new HttpException(`O usuário ${memberUser.nome} não tem permissões de cadastrar usuário`, HttpStatus.FORBIDDEN);
      }

      const user: CreateUserDTO = await this.repository.create({        
          login: dataUser.login,
          senha: dataUser.senha,
          nome: dataUser.nome,
          endereco: dataUser.endereco || '',
          email: dataUser.email,
          cpf: dataUser.cpf,
          tipo: dataUser.tipo,
      });
      return user;
    }
    catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
  }
  }
}

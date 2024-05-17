import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { TRepository } from '../repository/repository';
import { CreateUserMainAdminDTO } from './dto/create-user-main-admin.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { ListUserDTO } from './dto/select-user.dto';
import { UserPerfilEnum } from './enums/user-perfil.enum';

@Injectable()
export class UserService {
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('usuario');
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

        const user: CreateUserDTO = await this.repository.create({data: {        
            login: dataUser.login,
            senha: dataUser.senha,
            nome: dataUser.nome,
            endereco: dataUser.endereco || '',
            email: dataUser.email,
            cpf: dataUser.cpf,
            tipo: dataUser.tipo,
        }});
        return user;
      }
      catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
      }
  }

  
  async createUserMainAdmin(dataUser: CreateUserMainAdminDTO): Promise<CreateUserMainAdminDTO> {
    try {

      const memberUser = await this.repository.findAll({ take: 1 });
      
      if (memberUser.length > 0) {
        throw new HttpException(`O sistema já possui um adminsitrador principal`, HttpStatus.FORBIDDEN);
      }  

      const user: CreateUserDTO = await this.repository.create({data: {        
          login: dataUser.login,
          senha: dataUser.senha,
          nome: dataUser.nome,
          endereco: dataUser.endereco || '',
          email: dataUser.email,
          cpf: dataUser.cpf,
          tipo: UserPerfilEnum.PERFIL_USUARIO_ADM,
      }});
      return plainToInstance(CreateUserMainAdminDTO, user);

    }
    catch (error) {
      console.error('Erro ao criar usuário adminsitrador principal:', error);
      throw error;
    }
  }


  public async findAllUsers(): Promise<ListUserDTO[]> {
    const users: ListUserDTO[] = await this.repository.findAll();
    if (users === null) {
      throw new NotFoundException('Nenhum usuário foi encontrada')
    }; 

    return users.map((user) => ({
      login: user.login,
      nome: user.nome,
      email: user.email,
      cpf: user.cpf,
      tipo: user.tipo,
    }));
  }


  public async findUserById(id: number): Promise<ListUserDTO[]> {      
    const User: ListUserDTO[] = await this.repository.findById({ where: { id }});      
      if (!User) {
          return [];
      };
    return plainToInstance(ListUserDTO, User);
  }  

////
public async findUserByName(nome: string): Promise<ListUserDTO[]> {
  const User: ListUserDTO[] = await this.repository.findAll({ where: { nome: { contains: nome, mode: 'insensitive', } }});      
    if (!User) {
        return [];
    };
  return plainToInstance(ListUserDTO, User);
}  

////
public async updateUser(id: number, dataCategory: CreateUserDTO) {
  const User: CreateUserDTO = await this.repository.update( {      
      where: { id: Number(id) },
      data: {
        nome: dataCategory.nome, 
        login: dataCategory.login,
        senha: dataCategory.senha,
        email: dataCategory.email,
        cpf: dataCategory.cpf,
        tipo: dataCategory.tipo,
      }}
  );    
  return User;
}  

////
public async deleteUser(id: number) {
  const User = await this.repository.delete( {      
      where: { id: Number(id) }
    }
  );    
  return User;
}      


}

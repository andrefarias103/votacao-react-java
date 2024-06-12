import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { TRepository } from "../repository/repository";
import { CreateUserMainAdminDTO } from "./dto/create-user-main-admin.dto";
import { CreateUserDTO } from "./dto/create-user.dto";
import { ListUserDTO } from "./dto/select-user.dto";
import { UserProfileEnum } from "./enums/user-profile.enum";

@Injectable()
export class UserService {
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository("usuario");
  }

  async createUser(dataUser: CreateUserDTO): Promise<CreateUserDTO> {
    try {
      const user: CreateUserDTO = await this.repository.create({
        data: {
          login: dataUser.login,
          senha: dataUser.senha,
          nome: dataUser.nome,
          endereco: dataUser.endereco || "",
          email: dataUser.email,
          cpf: dataUser.cpf,
          tipo: dataUser.tipo,
        },
      });
      return user;
    } catch (error) {
      throw new InternalServerErrorException("Erro ao criar usuário");
    }
  }

  async createUserMainAdmin(
    dataUser: CreateUserMainAdminDTO,
  ): Promise<CreateUserMainAdminDTO> {
    try {
      const memberUser = await this.repository.findAll({ take: 1 });

      if (memberUser.length > 0) {
        throw new HttpException(
          `O sistema já possui um adminsitrador principal`,
          HttpStatus.FORBIDDEN,
        );
      }

      const user: CreateUserDTO = await this.repository.create({
        data: {
          login: dataUser.login,
          senha: dataUser.senha,
          nome: dataUser.nome,
          endereco: dataUser.endereco || "",
          email: dataUser.email,
          cpf: dataUser.cpf,
          tipo: UserProfileEnum.PERFIL_ADMIN,
        },
      });
      return plainToInstance(CreateUserMainAdminDTO, user);
    } catch (error) {
      console.error("Erro ao criar usuário adminsitrador principal:", error);
      throw error;
    }
  }

  public async findAllUsers(): Promise<ListUserDTO[]> {
    const users: ListUserDTO[] = await this.repository.findAll();
    if (users === null) {
      throw new NotFoundException("Nenhum usuário foi encontrada");
    }

    return users.map((user) => ({
      id: user.id,
      login: user.login,
      senha: user.senha,
      nome: user.nome,
      endereco: user.endereco,
      email: user.email,
      cpf: user.cpf,
      tipo: user.tipo,
    }));
  }

  public async findUserById(id: number): Promise<ListUserDTO> {
    const User: ListUserDTO = await this.repository.findById({ where: { id } });
    if (!User) {
      throw new HttpException(`Usuário não encontrado`, HttpStatus.NOT_FOUND);
    }
    return plainToInstance(ListUserDTO, User);
  }

  ////
  public async findUserByName(nome: string): Promise<ListUserDTO[]> {
    const User: ListUserDTO[] = await this.repository.findAll({
      where: { nome: { contains: nome, mode: "insensitive" } },
    });
    if (!User) {
      return [];
    }
    return plainToInstance(ListUserDTO, User);
  }

  ////
  public async findUserByCpf(cpf: string): Promise<ListUserDTO> {
    const User: ListUserDTO = await this.repository.findById({
      where: { cpf },
    });
    if (!User) {
      throw new HttpException(`CPF não encontrado`, HttpStatus.NOT_FOUND);
    }
    return plainToInstance(ListUserDTO, User);
  }

  ////
  async findUserProfile(): Promise<string[]> {
    return Object.keys(UserProfileEnum);
  }

  ////
  public async findUserByLogin(login: string): Promise<ListUserDTO> {
    const User: ListUserDTO = await this.repository.findById({
      where: { login },
    });
    if (!User) {
      throw new HttpException(
        `Login de usuário (${login}) não encontrado`,
        HttpStatus.NOT_FOUND,
      );
    }
    return plainToInstance(ListUserDTO, User);
  }

  ////
  public async updateUser(id: number, dataUser: CreateUserDTO) {
    const User: CreateUserDTO = await this.repository.update({
      where: { id: Number(id) },
      data: {
        nome: dataUser.nome,
        login: dataUser.login,
        senha: dataUser.senha,
        endereco: dataUser.endereco,
        email: dataUser.email,
        cpf: dataUser.cpf,
        tipo: dataUser.tipo,
      },
    });
    return User;
  }

  ////
  public async deleteUser(id: number) {
    const User = await this.repository.delete({
      where: { id: Number(id) },
    });
    return User;
  }
}

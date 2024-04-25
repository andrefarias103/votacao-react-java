import { Test, TestingModule } from '@nestjs/testing';
import { TRepository } from '../../repository/repository';
import { CreateUserDTO } from '../dto/create-user.dto';
import { ListUserDTO } from '../dto/select-user.dto';
import { UserPerfilEnum } from '../enums/user-perfil.enum';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [UserService, TRepository],
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('create User', () => {
    it('should create user', async () => {
      const userId: number = 1;
      const mockUserDto: CreateUserDTO = {
        login: 'jcl',
        senha: 'teste123',
        nome: 'João Carlos Lima',
        endereco: 'Av. São Luis 44',
        email: 'jcl@hotmail.com',
        cpf: '801.711.024.12',
        tipo: UserPerfilEnum.PERFIL_USUARIO_ADM,
      };
      jest.spyOn(userController, 'createUser').mockResolvedValue(mockUserDto);

      const createUser = await userController.createUser(userId, mockUserDto);
      expect(createUser).toEqual(mockUserDto);
    });
  });

  describe('find All Users', () => {
    it('should find All users', async () => {
      const mockUsersDto: ListUserDTO[] = [
        {
          login: 'jcl',
          nome: 'João Carlos Lima',
        },
        {
          login: 'cno',
          nome: 'Carlos Nascimento de Oliveira',
        },
      ];
      jest
        .spyOn(userController, 'findAllUsers')
        .mockResolvedValue(mockUsersDto);

      expect(await userController.findAllUsers()).toEqual(mockUsersDto);
    });
  });
});

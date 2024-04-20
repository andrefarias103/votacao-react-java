import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { ListaUsuarioDTO } from '../dto/ListaUsuario.dto';
import { CriaUsuarioDTO } from '../dto/cria-usuario.dto';
import { PerfilUsuarioEnum } from '../enums/perfil-usuario.enum';
import { UsuarioController } from '../usuario.controller';
import { UsuarioService } from '../usuario.service';

describe('UserController', () => {
  let userController: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [UsuarioController],
      providers: [UsuarioService, PrismaService],
    }).compile();

    userController = module.get<UsuarioController>(UsuarioController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('create User', () => {
    it('should create user', async () => {
      const mockUserDto: CriaUsuarioDTO = {
        login: 'jcl',
        senha: 'teste123',
        nome: 'João Carlos Lima',
        endereco: 'Av. São Luis 44',
        email: 'jcl@hotmail.com',
        cpf: '801.711.024.12',
        tipo: PerfilUsuarioEnum.PERFIL_USUARIO_ADM,
      };
      jest.spyOn(userController, 'createUser').mockResolvedValue(mockUserDto);

      const createUser = await userController.createUser(mockUserDto);
      expect(createUser).toEqual(mockUserDto);
    });
  });

  describe('find All Users', () => {
    it('should find All users', async () => {
      const mockUsersDto: ListaUsuarioDTO[] = [
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

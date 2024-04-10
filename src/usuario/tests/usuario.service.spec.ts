import { PrismaService } from '../../prisma/prisma.service';
import { ListaUsuarioDTO } from '../dto/ListaUsuario.dto';
import { CriaUsuarioDTO } from '../dto/cria-usuario.dto';
import { UsuarioService } from '../usuario.service';

describe('UsuarioService', () => {
  let userService: UsuarioService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    userService = new UsuarioService(prismaService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
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
        tipo: 'Administrador',
      };
      jest.spyOn(userService, 'createUser').mockResolvedValue(mockUserDto);

      const newUserDto = await userService.createUser(mockUserDto);
      expect(newUserDto).toEqual(mockUserDto);
    });
  });

  describe('find All Users', () => {
    it('should return all users', async () => {
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
      jest.spyOn(userService, 'findAllUsers').mockResolvedValue(mockUsersDto);

      const result = await userService.findAllUsers();
      expect(result).toHaveLength(2);
      expect(result[0].login).toBe('jcl');
      expect(result[0].nome).toBe('João Carlos Lima');
      expect(result[1].login).toBe('cno');
      expect(result[1].nome).toBe('Carlos Nascimento de Oliveira');
    });
  });
});

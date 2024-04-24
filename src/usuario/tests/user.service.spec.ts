import { TRepository } from 'src/repository/repository';
import { CreateUserDTO } from '../dto/create-user.dto';
import { ListUserDTO } from '../dto/select-user.dto';
import { UserService } from '../user.service';

describe('UserService', () => {
  let userService: UserService;
  let repository: TRepository;

  beforeEach(async () => {
    userService = new UserService(repository);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('create User', () => {
    it('should create user', async () => {
      const mockUserDto: CreateUserDTO = {
        login: 'jcl',
        senha: 'teste123',
        nome: 'João Carlos Lima',
        endereco: 'Av. São Luis 44',
        email: 'jcl@hotmail.com',
        cpf: '801.711.024.12',
        tipo: 'Administrador',
      };
      jest.spyOn(userService, 'createUser').mockResolvedValue(mockUserDto);

      const createUser = await userService.createUser(mockUserDto);
      expect(createUser).toEqual(mockUserDto);
    });
  });

  describe('find All Users', () => {
    it('should return all users', async () => {
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

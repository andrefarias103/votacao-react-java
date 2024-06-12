import { HttpException } from "@nestjs/common";
import { TRepository } from "src/repository/repository";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDTO } from "../dto/create-user.dto";
import { ListUserDTO } from "../dto/select-user.dto";
import { UserProfileEnum } from "../enums/user-profile.enum";
import { UserService } from "../user.service";

describe("UserService", () => {
  let userService: UserService;
  let repository: TRepository;

  beforeEach(async () => {
    userService = new UserService(repository);
  });

  it("should be defined", () => {
    expect(userService).toBeDefined();
  });

  describe("create User", () => {
    it("should create user", async () => {
      const mockUserDto: CreateUserDTO = {
        login: "jcl",
        senha: "teste123",
        nome: "João Carlos Lima",
        endereco: "Av. São Luis 44",
        email: "jcl@hotmail.com",
        cpf: "801.711.024.12",
        tipo: UserProfileEnum.PERFIL_COMUM,
      };

      jest.spyOn(userService, "createUser").mockResolvedValue(mockUserDto);

      const createUser = await userService.createUser(mockUserDto);
      expect(createUser).toEqual(mockUserDto);
    });

    it("should not create user", async () => {
      const userId: number = 1;
      const mockUserDto: CreateUserDTO = {
        login: "jcl",
        senha: "teste123",
        nome: "João Carlos Lima",
        endereco: "Av. São Luis 44",
        email: "jcl@hotmail.com",
        cpf: "801.711.024.12",
        tipo: UserProfileEnum.PERFIL_COMUM,
      };

      const result = userService.createUser(mockUserDto);
      await expect(result).rejects.toThrow(HttpException);
    });
  });

  describe("find All Users", () => {
    it("should return all users", async () => {
      const mockUsersDto: ListUserDTO[] = [
        {
          id: uuidv4(),
          login: "jcl",
          senha: "Teste231A",
          nome: "João Carlos Lima",
          endereco: "Ruas das Amelias 12",
          email: "jclima@hotmail.com",
          cpf: "818.958.400-66",
          tipo: "PERFIL_ADMIN",
        },
        {
          id: uuidv4(),
          login: "cno",
          senha: "Teste131A",
          nome: "Carlos Nascimento de Oliveira",
          endereco: "Rua Horizonte 50",
          email: "cno@gmail.com",
          cpf: "155.769.400-16",
          tipo: "PERFIL_COMUM",
        },
      ];
      jest.spyOn(userService, "findAllUsers").mockResolvedValue(mockUsersDto);

      const result = await userService.findAllUsers();
      expect(result).toHaveLength(2);
      expect(result[0].login).toBe("jcl");
      expect(result[0].nome).toBe("João Carlos Lima");
      expect(result[1].login).toBe("cno");
      expect(result[1].nome).toBe("Carlos Nascimento de Oliveira");
    });
  });
});

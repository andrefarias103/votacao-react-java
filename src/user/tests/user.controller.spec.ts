import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { v4 as uuidv4 } from "uuid";
import { TRepository } from "../../repository/repository";
import { HashearSenhaPipe } from "../../resource/pipes/hashear-password.pipe";
import { CreateUserDTO } from "../dto/create-user.dto";
import { ListUserDTO } from "../dto/select-user.dto";
import { UserProfileEnum } from "../enums/user-profile.enum";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";

describe("UserController", () => {
  let userController: UserController;
  let hashearSenhaPipe: HashearSenhaPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [
        UserService,
        TRepository,
        JwtService,
        {
          provide: HashearSenhaPipe,
          useValue: {
            transform: jest.fn((senha) => `hashed_${senha}`),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              const config = {
                DB_HOST: "localhost",
                DB_PORT: 5432,
                DB_USER: "testuser",
                DB_PASSWORD: "testpassword",
                DB_NAME: "testdb",
              };
              return config[key];
            }),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    hashearSenhaPipe = module.get<HashearSenhaPipe>(HashearSenhaPipe);
  });

  it("should be defined", () => {
    expect(userController).toBeDefined();
  });

  describe("create User", () => {
    it("should create user", async () => {
      const passwordHash: any = "Caracol12";
      const createdUserMock = {
        usuario: new ListUserDTO(),
        message: "Usuário criado com sucesso!",
      };
      const mockUserDto: CreateUserDTO = {
        login: "jcl",
        senha: "Teste231A",
        nome: "João Carlos Lima",
        endereco: "Ruas das Amelias 12",
        email: "jclima@hotmail.com",
        cpf: "818.958.400-66",
        tipo: UserProfileEnum.PERFIL_ADMIN,
      };

      jest.spyOn(hashearSenhaPipe, "transform").mockReturnValue(passwordHash);

      jest
        .spyOn(userController, "createUser")
        .mockResolvedValue(createdUserMock);

      const createUser = await userController.createUser(
        mockUserDto,
        passwordHash,
      );
      expect(createUser).toEqual(createdUserMock);
    });
  });

  describe("find All Users", () => {
    it("should find All users", async () => {
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
      jest
        .spyOn(userController, "findAllUsers")
        .mockResolvedValue(mockUsersDto);

      expect(await userController.findAllUsers()).toEqual(mockUsersDto);
    });
  });
});

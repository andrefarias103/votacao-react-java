import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { TRepository } from "../../repository/repository";
import { CategoryController } from "../category.controller";
import { CategoryService } from "../category.service";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { ListCategoryDto } from "../dto/select-category.dto";
import { AuthenticationGuard } from "./../../autenticacao/authentication.guard";
import { RolesGuard } from "./../../autenticacao/roles.guard";

describe("CategoryController", () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [CategoryController],
      providers: [CategoryService, TRepository, JwtService],
    })
      .overrideGuard(AuthenticationGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true),
      })
      .overrideGuard(RolesGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true),
      })
      .compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create Category", () => {
    it("should create category", async () => {
      const createdCategoryrMock = {
        categoria: new CreateCategoryDto(),
        message: "Categoria criada com sucesso",
      };
      const mockCategoryDto: CreateCategoryDto = {
        nome: "Assembleia Sindical",
        descricao: "Pautas sobre questões relacionadas a sindicato",
      };
      jest
        .spyOn(controller, "createCategory")
        .mockResolvedValue(createdCategoryrMock);

      const createCategory = await controller.createCategory(mockCategoryDto);
      expect(createCategory).toEqual(createdCategoryrMock);
    });
  });

  describe("find all categories", () => {
    it("should return all categories", async () => {
      const mockCategoriesDto: ListCategoryDto[] = [
        {
          id: 1,
          nome: "Assembleia Sindical",
          descricao:
            "Categoria que define pautas relacionadas a Assembleia Sindical",
        },
        {
          id: 2,
          nome: "Assembleia Condominal",
          descricao: "Categoria que define pautas relacionadas a Condomínio",
        },
      ];
      jest
        .spyOn(controller, "findAllCategories")
        .mockResolvedValue(mockCategoriesDto);
      expect(await controller.findAllCategories()).toEqual(mockCategoriesDto);
    });
  });
});

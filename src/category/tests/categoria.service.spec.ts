import { TRepository } from "../../repository/repository";
import { CategoryService } from "../category.service";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { ListCategoryDto } from "../dto/select-category.dto";

describe("CategoryService", () => {
  let service: CategoryService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new CategoryService(repository);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create Category", () => {
    it("should create category", async () => {
      const createdCategoryrMock = {
        categoria: new CreateCategoryDto(),
        message: "Categoria criada com sucesso",
      };
      const mockCategoryDto: CreateCategoryDto = {
        nome: "Assembleia Sindical",
        descricao:
          "Categoria que define pautas relacionadas a Assembleia Sindical",
      };
      jest
        .spyOn(service, "createCategory")
        .mockResolvedValue(createdCategoryrMock);

      const createCategory = await service.createCategory(mockCategoryDto);
      expect(createCategory).toEqual(createdCategoryrMock);
    });
  });

  describe("find All Categories", () => {
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
        .spyOn(service, "findAllCategories")
        .mockResolvedValue(mockCategoriesDto);

      const result = await service.findAllCategories();
      expect(result).toHaveLength(2);
      expect(result[0].nome).toBe("Assembleia Sindical");
      expect(result[0].descricao).toBe(
        "Categoria que define pautas relacionadas a Assembleia Sindical",
      );
      expect(result[1].nome).toBe("Assembleia Condominal");
      expect(result[1].descricao).toBe(
        "Categoria que define pautas relacionadas a Condomínio",
      );
    });
  });
});

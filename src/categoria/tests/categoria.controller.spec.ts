import { Test, TestingModule } from '@nestjs/testing';
import { TRepository } from '../../repository/repository';
import { CategoryController } from '../category.controller';
import { CategoryService } from '../category.service';
import { CreateCategoryDto } from '../dto/create-categoria.dto';
import { ListCategoryDto } from '../dto/select-categoria.dto';

describe('CategoryController', () => {
  let controller: CategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [CategoryController],
      providers: [CategoryService, TRepository],
    }).compile();

    controller = module.get<CategoryController>(CategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create Category', () => {
    it('should create category', async () => {
      const mockCategoryDto: CreateCategoryDto = {
        nome: 'Assembleia Sindical',
        descricao: 'Pautas sobre questões relacionadas a sindicato',
      };
      jest
        .spyOn(controller, 'createCategory')
        .mockResolvedValue(mockCategoryDto);

      const createCategory = await controller.createCategory(mockCategoryDto);
      expect(createCategory).toEqual(mockCategoryDto);
    });
  });

  describe('find all categories', () => {
    it('should return all categories', async () => {
      const mockCategoriesDto: ListCategoryDto[] = [
        {
          nome: 'Assembleia Sindical',
          descricao:
            'Categoria que define pautas relacionadas a Assembleia Sindical',
        },
        {
          nome: 'Assembleia Condominal',
          descricao: 'Categoria que define pautas relacionadas a Condomínio',
        },
      ];
      jest
        .spyOn(controller, 'findAllCategories')
        .mockResolvedValue(mockCategoriesDto);
      expect(await controller.findAllCategories()).toEqual(mockCategoriesDto);
    });
  });

});

import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { CategoriaController } from '../categoria.controller';
import { CategoriaService } from '../categoria.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { ListCategoriaDto } from '../dto/select-categoria.dto';

describe('CategoriaController', () => {
  let controller: CategoriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [CategoriaController],
      providers: [CategoriaService, PrismaService],
    }).compile();

    controller = module.get<CategoriaController>(CategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create Category', () => {
    it('should create category', async () => {
      const mockCategoryDto: CreateCategoriaDto = {
        nome: 'Assembleia Sindical',
        descricao: 'Pautas sobre questões relacionadas a sindicato',
      };
      jest
        .spyOn(controller, 'createCategory')
        .mockResolvedValue(mockCategoryDto);

      const newCategoryDto = await controller.createCategory(mockCategoryDto);
      expect(newCategoryDto).toEqual(mockCategoryDto);
    });
  });

  describe('find all categories', () => {
    it('should return all categories', async () => {
      const mockCategoriesDto: ListCategoriaDto[] = [
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

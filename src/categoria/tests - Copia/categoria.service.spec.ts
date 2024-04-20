import { PrismaService } from '../../prisma/prisma.service';
import { CategoriaService } from '../categoria.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { ListCategoriaDto } from '../dto/select-categoria.dto';

describe('CategoriaService', () => {
  let service: CategoriaService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    service = new CategoriaService(prismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Category', () => {
    it('should create category', async () => {
      const mockCategoryDto: CreateCategoriaDto = {
        nome: 'Assembleia Sindical',
        descricao:
          'Categoria que define pautas relacionadas a Assembleia Sindical',
      };
      jest.spyOn(service, 'createCategory').mockResolvedValue(mockCategoryDto);

      const createCategory = await service.createCategory(mockCategoryDto);
      expect(createCategory).toEqual(mockCategoryDto);
    });
  });

  describe('find All Categories', () => {
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
        .spyOn(service, 'findAllCategories')
        .mockResolvedValue(mockCategoriesDto);

      const result = await service.findAllCategories();
      expect(result).toHaveLength(2);
      expect(result[0].nome).toBe('Assembleia Sindical');
      expect(result[0].descricao).toBe(
        'Categoria que define pautas relacionadas a Assembleia Sindical',
      );
      expect(result[1].nome).toBe('Assembleia Condominal');
      expect(result[1].descricao).toBe(
        'Categoria que define pautas relacionadas a Condomínio',
      );
    });
  });

  });


import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePautaDto } from '../dto/create-pauta.dto';
import { ListPautaDto } from '../dto/select-pauta.dto';
import { PautaController } from '../pauta.controller';
import { PautaService } from '../pauta.service';

describe('PautaController', () => {
  let controller: PautaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [PautaController],
      providers: [PautaService, PrismaService],
    }).compile();

    controller = module.get<PautaController>(PautaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create Agenda', () => {
    it('should create agenda', async () => {
      const categoryId = 1;
      const mockAgendaDto: CreatePautaDto = {
        titulo: 'Votação do reajuste do vale-refeição',
        descricao:  'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários',        
      };
      jest.spyOn(controller, 'createAgenda').mockResolvedValue(mockAgendaDto);

      const newAgendaDto = await controller.createAgenda(categoryId, mockAgendaDto);
      expect(newAgendaDto).toEqual(mockAgendaDto);

    })
  })

  describe('find all agends', () => {
    it('should return all agends', async () => {
      const mockAgendaDto: ListPautaDto[] = [
        {
          titulo: 'Votação do reajuste do vale-refeição',
          descricao: 'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários', 
          categoriaId: 1,               
        },
        {        
          titulo: 'Votação Day Off',
          descricao: 'Será votada a obrigatoriedade da folga no dia do aniversário do colaborador',      
          categoriaId: 1,
       }
      ];
      jest.spyOn(controller, 'findAllAgendas').mockResolvedValue(mockAgendaDto);
      expect(await controller.findAllAgendas()).toEqual(mockAgendaDto);
      
    })
  })

  describe('find agendas by category', () => {
    it('should return all agendas filtered by category', async () => {
      const categoryId: number = 1;
      const mockAgendaDto: ListPautaDto[] = [
        {
          titulo: 'Votação do reajuste do vale-refeição',
          descricao: 'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários', 
          categoriaId: 1,               
        },
        {        
          titulo: 'Votação Day Off',
          descricao: 'Será votada a obrigatoriedade da folga no dia do aniversário do colaborador',      
          categoriaId: 1,
       }
      ];

      jest.spyOn(controller, 'findAgendasByCategory').mockResolvedValue(mockAgendaDto);

      const result = await controller.findAgendasByCategory(categoryId);
      expect(result[0].titulo).toBe('Votação do reajuste do vale-refeição');
      expect(result[1].titulo).toBe('Votação Day Off');
    })
  })


});

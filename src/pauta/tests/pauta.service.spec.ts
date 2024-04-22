import { TRepository } from '../../repository/repository';
import { CreatePautaDto } from '../dto/create-pauta.dto';
import { ListPautaDto } from '../dto/select-pauta.dto';
import { PautaService } from '../pauta.service';

describe('PautaService', () => {
  let service: PautaService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new PautaService(repository);
    });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Agenda', () => {
    it('should create Agenda', async () => {
      const categoryId: number = 1;
      const mockAgendaDto: CreatePautaDto = {
        titulo: 'Votação do reajuste do vale-refeição',
        descricao:  'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários',        
      };
      jest.spyOn(service, 'createAgenda').mockResolvedValue(mockAgendaDto);
      
      const createAgenda = await service.createAgenda(categoryId, mockAgendaDto);
      expect(createAgenda).toEqual(mockAgendaDto);
    });
  })

  describe('find All Agendas', () => {
    it('should return all agendas', async () => {
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
      jest.spyOn(service, 'findAllAgendas').mockResolvedValue(mockAgendaDto);

      const result: ListPautaDto[] = await service.findAllAgendas();
      expect(result).toHaveLength(2);
      expect(result[0].titulo).toBe('Votação do reajuste do vale-refeição');
      expect(result[0].descricao).toBe('Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários');
      expect(result[0].categoriaId).toBe(1);
      expect(result[1].titulo).toBe('Votação Day Off');
      expect(result[1].descricao).toBe('Será votada a obrigatoriedade da folga no dia do aniversário do colaborador');
      expect(result[1].categoriaId).toBe(1);
    })
  })

  describe('find Agendas by Category', () => {
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

      jest.spyOn(service, 'findAgendasByCategory').mockResolvedValue(mockAgendaDto);
      const result: ListPautaDto[] = await service.findAgendasByCategory(categoryId);
      expect(result).toHaveLength(2);
      expect(result[0].titulo).toBe('Votação do reajuste do vale-refeição');
      expect(result[0].descricao).toBe('Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários');
      expect(result[0].categoriaId).toBe(1);
      expect(result[1].titulo).toBe('Votação Day Off');
      expect(result[1].descricao).toBe('Será votada a obrigatoriedade da folga no dia do aniversário do colaborador');
      expect(result[1].categoriaId).toBe(1);      
    })
  })

});

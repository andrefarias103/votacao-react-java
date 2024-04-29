import { HttpException, NotFoundException } from '@nestjs/common';
import { TRepository } from '../../repository/repository';
import { AgendaService } from '../agenda.service';
import { CreateAgendaDto } from '../dto/create-agenda.dto';
import { ListAgendaDto } from '../dto/select-agenda.dto';

describe('AgendaService', () => {
  let service: AgendaService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new AgendaService(repository);
    });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Agenda', () => {
    it('should create Agenda', async () => {
      const userId: number = 1;
      const categoryId: number = 1;
      const mockAgendaDto: CreateAgendaDto = {
        titulo: 'Votação do reajuste do vale-refeição',
        descricao:  'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários',        
      };
      jest.spyOn(service, 'createAgenda').mockResolvedValue(mockAgendaDto);
      
      const createAgenda = await service.createAgenda(userId, categoryId, mockAgendaDto);
      expect(createAgenda).toEqual(mockAgendaDto);
    });

    it('should not create by a common user', async () => {
      const userId = 1;
      const categoryId: number = 1;
      const mockAgendaDto: CreateAgendaDto = {
        titulo: 'Votação do reajuste do vale-refeição',
        descricao:  'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários',        
      };

      await expect(service.createAgenda(userId, categoryId, mockAgendaDto)).rejects.toThrow(HttpException);

    }) 
  })

  describe('find All Agendas', () => {
    it('should return all agendas', async () => {
      const mockAgendaDto: ListAgendaDto[] = [
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

      const result: ListAgendaDto[] = await service.findAllAgendas();
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
      const mockAgendaDto: ListAgendaDto[] = [
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
      const result: ListAgendaDto[] = await service.findAgendasByCategory(categoryId);
      expect(result).toHaveLength(2);
      expect(result[0].titulo).toBe('Votação do reajuste do vale-refeição');
      expect(result[0].descricao).toBe('Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários');
      expect(result[0].categoriaId).toBe(1);
      expect(result[1].titulo).toBe('Votação Day Off');
      expect(result[1].descricao).toBe('Será votada a obrigatoriedade da folga no dia do aniversário do colaborador');
      expect(result[1].categoriaId).toBe(1);      
    })
  })

  describe('find agenda data', () => {
    it('should return agenda data', async () => {
      const agendaId: number = 1;
      const mockAgendaDto: ListAgendaDto = {          
                                              titulo: 'Votação do reajuste do vale-refeição',
                                              descricao: 'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários', 
                                              categoriaId: 1,    
                                            };
       jest.spyOn(service,'findAgenda').mockResolvedValue(mockAgendaDto);
       const result: ListAgendaDto = await service.findAgenda(agendaId);
       expect(result.titulo).toBe('Votação do reajuste do vale-refeição');
       expect(result.descricao).toBe('Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários')              
    });

    it('should not return agenda data', async () => {
      const agendaId: number = 144;
      const mockAgendaDto: ListAgendaDto = {          
        titulo: 'Votação do reajuste do vale-refeição',
        descricao: 'Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários', 
        categoriaId: 1,    
      };
      await expect(service.findAgenda(agendaId)).rejects.toThrow(NotFoundException);     
    })
  });

});

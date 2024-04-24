import { Test, TestingModule } from '@nestjs/testing';
import { TRepository } from '../../repository/repository';
import { CreateVotacaoDto } from '../dto/create-votacao.dto';
import { VotacaoController } from '../votacao.controller';
import { VotacaoService } from '../votacao.service';

describe('VotacaoController', () => {
  let controller: VotacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [VotacaoController],
      providers: [VotacaoService, TRepository],
    }).compile();

    controller = module.get<VotacaoController>(VotacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create Vote', () => {
    it('should create vote', async () => {
      const usuarioId: number = 1;
      const pautaId: number = 1;
      const mockVotacaoDto: CreateVotacaoDto = {
        opcaoVotada: 'Sim',        
      }; 
      jest.spyOn(controller,'createVotacao').mockResolvedValue(mockVotacaoDto);

      const result = await controller.createVotacao(usuarioId, pautaId, mockVotacaoDto);
      expect(result).toEqual(mockVotacaoDto); 
    });
  })

});

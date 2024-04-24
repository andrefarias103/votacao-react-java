import { TRepository } from '../../repository/repository';
import { CreateVotacaoDto } from '../dto/create-votacao.dto';
import { VotacaoService } from '../votacao.service';

describe('VotacaoService', () => {
  let service: VotacaoService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new VotacaoService(repository);
    });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create Vote', () => {
    it('should create Vote', async () => {
      const usuarioId: number = 1;
      const pautaId: number = 1;
      const mockVotacaoDto: CreateVotacaoDto = {
        opcaoVotada: 'Nao',   
      }

      jest.spyOn(service, 'createVotacao').mockResolvedValue(mockVotacaoDto);
      const result = await service.createVotacao(usuarioId, pautaId, mockVotacaoDto);
      expect(result).toEqual(mockVotacaoDto);
    })

  })
});

import { PrismaService } from '../../prisma/prisma.service';
import { CreateVotacaoDto } from '../dto/create-votacao.dto';
import { VotacaoService } from '../votacao.service';

describe('VotacaoService', () => {
  let service: VotacaoService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    prismaService = new PrismaService();
    service = new VotacaoService(prismaService);
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

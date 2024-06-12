import { TRepository } from "../../repository/repository";
import { CreateVotationDto } from "../dto/create-votation.dto";
import { VotationService } from "../votation.service";

describe("VotationService", () => {
  let service: VotationService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new VotationService(repository);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create vote", () => {
    it("should create Vote", async () => {
      const usuarioId: number = 1;
      const mockVotacaoDto: CreateVotationDto = {
        opcaoVotada: "Nao",
        pautaId: 1,
      };

      jest.spyOn(service, "createVotacao").mockResolvedValue(mockVotacaoDto);
      const result = await service.createVotacao(usuarioId, mockVotacaoDto);
      expect(result).toEqual(mockVotacaoDto);
    });
  });
});

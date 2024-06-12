import { Test, TestingModule } from "@nestjs/testing";
import { TRepository } from "../../repository/repository";
import { CreateVotationDto } from "../dto/create-votation.dto";
import { VotationController } from "../votation.controller";
import { VotationService } from "../votation.service";
import { AuthenticationGuard } from "./../../autenticacao/authentication.guard";
import { RolesGuard } from "./../../autenticacao/roles.guard";

describe("VotationController", () => {
  let controller: VotationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [VotationController],
      providers: [VotationService, TRepository],
    })
      .overrideGuard(AuthenticationGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true),
      })
      .overrideGuard(RolesGuard)
      .useValue({
        canActivate: jest.fn().mockReturnValue(true),
      })
      .compile();

    controller = module.get<VotationController>(VotationController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create Vote", () => {
    it("should create vote", async () => {
      const usuarioId: number = 1;
      const mockVotacaoDto: CreateVotationDto = {
        opcaoVotada: "Sim",
        pautaId: 1,
      };
      jest.spyOn(controller, "createVotacao").mockResolvedValue(mockVotacaoDto);

      const result = await controller.createVotacao(usuarioId, mockVotacaoDto);
      expect(result).toEqual(mockVotacaoDto);
    });
  });
});

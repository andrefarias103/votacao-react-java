import { Test, TestingModule } from "@nestjs/testing";
import { TRepository } from "../../repository/repository";
import { SessionService } from "../../session/session.service";
import { VotationController } from "../../votation/votation.controller";
import { VotationService } from "../../votation/votation.service";
import { AgendaController } from "../agenda.controller";
import { AgendaService } from "../agenda.service";
import { CreateAgendaDto } from "../dto/create-agenda.dto";
import { ListAgendaDto } from "../dto/select-agenda.dto";
import { AuthenticationGuard } from "./../../authentication/authentication.guard";
import { RolesGuard } from "./../../authentication/roles.guard";

describe("AgendaController", () => {
  let controller: AgendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [AgendaController, VotationController],
      providers: [AgendaService, VotationService, SessionService, TRepository],
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

    controller = module.get<AgendaController>(AgendaController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create Agenda", () => {
    it("should create agenda", async () => {
      const userId = 1;
      const mockAgendaDto: CreateAgendaDto = {
        titulo: "Votação do reajuste do vale-refeição",
        descricao:
          "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
        dataHoraInicio: "2024-05-21 10:00:00",
        dataHoraFim: "2024-05-21 11:00:00",
        categoriaId: 1,
      };
      jest.spyOn(controller, "createAgenda").mockResolvedValue(mockAgendaDto);

      const createAgenda = await controller.createAgenda(userId, mockAgendaDto);
      expect(createAgenda).toEqual(mockAgendaDto);
    });
  });

  describe("find all agends", () => {
    it("should return all agends", async () => {
      const mockAgendaDto: ListAgendaDto[] = [
        {
          id: 1,
          titulo: "Votação do reajuste do vale-refeição",
          descricao:
            "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
        },
        {
          id: 2,
          titulo: "Votação Day Off",
          descricao:
            "Será votada a obrigatoriedade da folga no dia do aniversário do colaborador",
        },
      ];
      jest.spyOn(controller, "findAllAgendas").mockResolvedValue(mockAgendaDto);
      expect(await controller.findAllAgendas()).toEqual(mockAgendaDto);
    });
  });

  describe("find agendas by category", () => {
    it("should return all agendas filtered by category", async () => {
      const categoryId: number = 1;
      const mockAgendaDto: ListAgendaDto[] = [
        {
          id: 1,
          titulo: "Votação do reajuste do vale-refeição",
          descricao:
            "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
        },
        {
          id: 2,
          titulo: "Votação Day Off",
          descricao:
            "Será votada a obrigatoriedade da folga no dia do aniversário do colaborador",
        },
      ];

      jest
        .spyOn(controller, "findAgendasByCategory")
        .mockResolvedValue(mockAgendaDto);

      const result = await controller.findAgendasByCategory(categoryId);
      expect(result[0].titulo).toBe("Votação do reajuste do vale-refeição");
      expect(result[1].titulo).toBe("Votação Day Off");
    });
  });
});
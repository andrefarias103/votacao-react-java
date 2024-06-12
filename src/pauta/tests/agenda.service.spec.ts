import { NotFoundException } from "@nestjs/common";
import { TRepository } from "../../repository/repository";
import { SessionService } from "../../sessao/session.service";
import { VotationService } from "../../votacao/votation.service";
import { AgendaService } from "../agenda.service";
import { CreateAgendaDto } from "../dto/create-agenda.dto";
import { ListAgendaDto } from "../dto/select-agenda.dto";

describe("AgendaService", () => {
  let serviceAgenda: AgendaService;
  let serviceVotation: VotationService;
  let serviceSession: SessionService;
  let repositoryAgenda: TRepository;

  beforeEach(async () => {
    serviceAgenda = new AgendaService(
      repositoryAgenda,
      serviceVotation,
      serviceSession,
    );
  });

  it("should be defined", () => {
    expect(serviceAgenda).toBeDefined();
  });

  describe("create Agenda", () => {
    it("should create Agenda", async () => {
      const userId: number = 1;
      const mockAgendaDto: CreateAgendaDto = {
        titulo: "Votação do reajuste do vale-refeição",
        descricao:
          "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
        dataHoraInicio: "2024-05-21 10:00:00",
        dataHoraFim: "2024-05-21 11:00:00",
        categoriaId: 1,
      };
      jest
        .spyOn(serviceAgenda, "createAgenda")
        .mockResolvedValue(mockAgendaDto);

      const createAgenda = await serviceAgenda.createAgenda(
        userId,
        mockAgendaDto,
      );
      expect(createAgenda).toEqual(mockAgendaDto);
    });
  });

  describe("find All Agendas", () => {
    it("should return all agendas", async () => {
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
        .spyOn(serviceAgenda, "findAllAgendas")
        .mockResolvedValue(mockAgendaDto);

      const result: ListAgendaDto[] = await serviceAgenda.findAllAgendas();
      expect(result).toHaveLength(2);
      expect(result[0].titulo).toBe("Votação do reajuste do vale-refeição");
      expect(result[0].descricao).toBe(
        "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
      );
      expect(result[1].titulo).toBe("Votação Day Off");
      expect(result[1].descricao).toBe(
        "Será votada a obrigatoriedade da folga no dia do aniversário do colaborador",
      );
    });
  });

  describe("find Agendas by Category", () => {
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
        .spyOn(serviceAgenda, "findAgendasByCategory")
        .mockResolvedValue(mockAgendaDto);
      const result: ListAgendaDto[] =
        await serviceAgenda.findAgendasByCategory(categoryId);
      expect(result).toHaveLength(2);
      expect(result[0].titulo).toBe("Votação do reajuste do vale-refeição");
      expect(result[0].descricao).toBe(
        "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
      );
      expect(result[1].titulo).toBe("Votação Day Off");
      expect(result[1].descricao).toBe(
        "Será votada a obrigatoriedade da folga no dia do aniversário do colaborador",
      );
    });
  });

  describe("find start agendas", () => {
    it("should return agendas with votes when category is provided", async () => {
      const mockCategory = {
        id: 3,
        nome: "Plebiscito",
        descricao: "desarmamento da população",
      };
      const mockAgenda: ListAgendaDto[] = [
        {
          id: 1,
          titulo: "Você é a favor do desarmamento?",
          descricao: "Será votado o desarmamento ou não da população",
          quantidadeVotos: 1,
          categoria: { ...mockCategory },
          votacao: { opcaoVotada: "Sim", dataHoraVoto: "2024-05-07 11:45:47" },
        },
        {
          id: 2,
          titulo: "Você é a favor da alteração da reforma agrária?",
          descricao: "Será votado se a reforma agrária será alterada ou não",
          quantidadeVotos: 1,
          categoria: { ...mockCategory },
          votacao: { opcaoVotada: "Sim", dataHoraVoto: "2024-05-07 11:45:47" },
        },
      ];
      const mockTotalVotes: number = 1;

      jest
        .spyOn(serviceAgenda, "findAgendasByStatus")
        .mockResolvedValue(mockAgenda);
      const agenda: ListAgendaDto[] =
        await serviceAgenda.findAgendasByStatus("STATUS_INICIADA");
      expect(agenda).toEqual(mockAgenda);
      expect(agenda).toHaveLength(2);
      expect(agenda[0].quantidadeVotos).toBe(mockTotalVotes);
      expect(agenda[1].quantidadeVotos).toBe(mockTotalVotes);
    });
  });

  describe("find agenda data", () => {
    it("should return agenda data", async () => {
      const agendaId: number = 1;
      const mockAgendaDto: ListAgendaDto = {
        id: 1,
        titulo: "Votação do reajuste do vale-refeição",
        descricao:
          "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
      };
      jest.spyOn(serviceAgenda, "findAgenda").mockResolvedValue(mockAgendaDto);
      const result: ListAgendaDto = await serviceAgenda.findAgenda(agendaId);
      expect(result.titulo).toBe("Votação do reajuste do vale-refeição");
      expect(result.descricao).toBe(
        "Será votado o aumento de 1% de reajuste no valor do vale-refeição dos funcionários",
      );
    });

    it("should not return agenda data", async () => {
      const agendaId: number = 144;
      await expect(serviceAgenda.findAgenda(agendaId)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});

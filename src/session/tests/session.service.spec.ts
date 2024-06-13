import { StatusSessaoEnum } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { TRepository } from "../../repository/repository";
import { ListSessionDto } from "../dto/select-session.dto";
import { SessionService } from "../session.service";

describe("SessionService", () => {
  let service: SessionService;
  let repository: TRepository;

  beforeEach(async () => {
    service = new SessionService(repository);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("create Session", () => {
    it("should create Session", async () => {
      const pautaId: number = 1;
      const mockSessionDto: ListSessionDto = {
        id: uuidv4(),
        dataHoraInicio: "15/04/2024 14:00:00",
        dataHoraFim: "15/04/2024 14:30:00",
        status: StatusSessaoEnum.STATUS_AGUARDANDO,
      };
      jest.spyOn(service, "createSession").mockResolvedValue(mockSessionDto);

      const createSession = await service.createSession(mockSessionDto);
      expect(createSession).toEqual(mockSessionDto);
    });

    it("should return an error when validating dates", async () => {
      const pautaId: number = 0;
      const mockSessionDto: ListSessionDto = {
        id: uuidv4(),
        dataHoraInicio: "15/04/2024 15:00:00",
        dataHoraFim: "15/04/2024 14:30:00",
        status: StatusSessaoEnum.STATUS_AGUARDANDO,
      };

      await expect(service.createSession(mockSessionDto)).rejects.toThrow(
        Error,
      );
    });
  });

  const mockStartSessionFunction = jest.fn((mockDataHoraAtual: Date) => {
    const mockSessionR = {
      id: 1,
      dataHoraInicio: "2024-04-25 10:00:00",
      status: StatusSessaoEnum.STATUS_AGUARDANDO,
    };
    if (new Date(mockSessionR.dataHoraInicio) <= mockDataHoraAtual) {
      return {
        ...mockSessionR,
        status: StatusSessaoEnum.STATUS_INICIADA,
      };
    }
    return { status: StatusSessaoEnum.STATUS_AGUARDANDO };
  });

  const mockFinishSessionFunction = jest.fn((mockDataHoraAtual: Date) => {
    const mockSessionR = {
      id: 1,
      dataHoraInicio: "2024-04-25 10:00:00",
      dataHoraFim: "2024-04-25 13:00:00",
      status: StatusSessaoEnum.STATUS_INICIADA,
    };
    if (
      new Date(mockSessionR.dataHoraInicio) <= mockDataHoraAtual &&
      new Date(mockSessionR.dataHoraFim) <= mockDataHoraAtual
    ) {
      return {
        ...mockSessionR,
        status: StatusSessaoEnum.STATUS_CONCLUIDA,
      };
    }
    return { status: StatusSessaoEnum.STATUS_INICIADA };
  });

  describe("start sessions", () => {
    it("should start session", async () => {
      const mockSession = StatusSessaoEnum.STATUS_INICIADA;

      const mockDataHoraAtual = new Date("2024-04-25 12:00:00");

      const result = mockStartSessionFunction(mockDataHoraAtual).status;

      expect(result).toBe(mockSession);
    });

    it("should not start session", async () => {
      const mockSession = StatusSessaoEnum.STATUS_AGUARDANDO;

      const mockDataHoraAtual = new Date("2024-04-25 08:00:00");

      const result = mockStartSessionFunction(mockDataHoraAtual).status;

      expect(result).toBe(mockSession);
    });
  });

  describe("finish sessions", () => {
    it("should finish session", async () => {
      const mockSession = StatusSessaoEnum.STATUS_CONCLUIDA;

      const mockDataHoraAtual = new Date("2024-04-25 13:30:00");

      const result = mockFinishSessionFunction(mockDataHoraAtual).status;

      expect(result).toBe(mockSession);
    });

    it("should not finish session", async () => {
      const mockSession = StatusSessaoEnum.STATUS_INICIADA;

      const mockDataHoraAtual = new Date("2024-04-25 12:00:00");

      const result = mockFinishSessionFunction(mockDataHoraAtual).status;

      expect(result).toBe(mockSession);
    });
  });

  describe("find all sessions", () => {
    it("should find all sessions", async () => {
      const mockSessionDto: ListSessionDto[] = [
        {
          id: uuidv4(),
          dataHoraInicio: "15-04-2024 10:00:00",
          dataHoraFim: "15-04-2024 10:30:00",
          status: StatusSessaoEnum.STATUS_INICIADA,
        },
        {
          id: uuidv4(),
          dataHoraInicio: "15-04-2024 11:00:00",
          dataHoraFim: "15-04-2024 11:30:00",
          status: StatusSessaoEnum.STATUS_CONCLUIDA,
        },
      ];
      jest.spyOn(service, "findAllSessions").mockResolvedValue(mockSessionDto);

      const result: ListSessionDto[] = await service.findAllSessions();
      expect(result).toHaveLength(2);
      expect(result[0].dataHoraInicio).toBe("15-04-2024 10:00:00");
      expect(result[0].dataHoraFim).toBe("15-04-2024 10:30:00");
      expect(result[0].status).toBe(StatusSessaoEnum.STATUS_INICIADA);
      expect(result[1].dataHoraInicio).toBe("15-04-2024 11:00:00");
      expect(result[1].dataHoraFim).toBe("15-04-2024 11:30:00");
      expect(result[1].status).toBe(StatusSessaoEnum.STATUS_CONCLUIDA);
    });
  });

  describe("find session by agenda", () => {
    it("should find session by agenda", async () => {
      const agendaId: number = 1;
      const mockSessionDto: ListSessionDto[] = [
        {
          id: uuidv4(),
          dataHoraInicio: "15-04-2024 10:00:00",
          dataHoraFim: "15-04-2024 10:30:00",
          status: StatusSessaoEnum.STATUS_INICIADA,
        },
        {
          id: uuidv4(),
          dataHoraInicio: "15-04-2024 11:00:00",
          dataHoraFim: "15-04-2024 11:30:00",
          status: StatusSessaoEnum.STATUS_CONCLUIDA,
        },
      ];
      jest
        .spyOn(service, "findSessionByAgenda")
        .mockResolvedValue(mockSessionDto);

      const result: ListSessionDto[] =
        await service.findSessionByAgenda(agendaId);
      expect(result).toHaveLength(2);
      expect(result[0].dataHoraInicio).toBe("15-04-2024 10:00:00");
      expect(result[0].dataHoraFim).toBe("15-04-2024 10:30:00");
      expect(result[0].status).toBe(StatusSessaoEnum.STATUS_INICIADA);
      expect(result[1].dataHoraInicio).toBe("15-04-2024 11:00:00");
      expect(result[1].dataHoraFim).toBe("15-04-2024 11:30:00");
      expect(result[1].status).toBe(StatusSessaoEnum.STATUS_CONCLUIDA);
    });
  });
});

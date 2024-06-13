import { Test, TestingModule } from "@nestjs/testing";
import { TRepository } from "../../repository/repository";
import { CreateSessionDto } from "../dto/create-session.dto";
import { ListSessionDto } from "../dto/select-session.dto";
import { SessionController } from "../session.controller";
import { SessionService } from "../session.service";
import { AuthenticationGuard } from "./../../authentication/authentication.guard";
import { RolesGuard } from "./../../authentication/roles.guard";

describe("SessionController", () => {
  let controller: SessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [SessionController],
      providers: [SessionService, TRepository],
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

    controller = module.get<SessionController>(SessionController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create Session", () => {
    it("should create session", async () => {
      const mockSessionDto: CreateSessionDto = {
        dataHoraInicio: "15/04/2024 14:00:00",
        dataHoraFim: "15/04/2024 14:30:00",
      };

      jest.spyOn(controller, "createSession").mockResolvedValue(mockSessionDto);

      const createSession = await controller.createSession(mockSessionDto);
      expect(createSession).toEqual(mockSessionDto);
    });
  });

  describe("find All Sessions", () => {
    it("should return all sessions", async () => {
      const mockSessionDto: ListSessionDto[] = [
        {
          id: "1",
          dataHoraInicio: "16/04/2024 10:00:00",
          dataHoraFim: "16/04/2024 10:04:00",
          status: "Iniciada",
        },
        {
          id: "2",
          dataHoraInicio: "16/04/2024 10:00:00",
          dataHoraFim: "16/04/2024 10:04:00",
          status: "Iniciada",
        },
      ];
      jest
        .spyOn(controller, "findAllSessions")
        .mockResolvedValue(mockSessionDto);
      const result = await controller.findAllSessions();
      expect(result).toEqual(mockSessionDto);
    });
  });
});

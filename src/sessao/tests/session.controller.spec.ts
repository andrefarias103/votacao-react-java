import { Test, TestingModule } from "@nestjs/testing";
import { TRepository } from "../../repository/repository";
import { CreateSessionDto } from "../dto/create-session.dto";
import { ListSessionDto } from "../dto/select-session.dto";
import { SessionController } from "../session.controller";
import { SessionService } from "../session.service";

describe('SessionController', () => {
    let controller: SessionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [],
            controllers: [SessionController],
            providers: [SessionService, TRepository],
        }).compile();

        controller = module.get<SessionController>(SessionController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
      });

    describe('create Session', () => {
        it('should create session', async () => {
            const pautaId = 1;
            const mockSessionDto: CreateSessionDto = {
                dataHoraInicio: '15/04/2024 14:00:00',
                dataHoraFim: '15/04/2024 14:30:00',
            };
            jest.spyOn(controller, 'createSession').mockResolvedValue(mockSessionDto);
    
            const createSession = await controller.createSession(pautaId, mockSessionDto);
            expect(createSession).toEqual(mockSessionDto);        
        });
    })

    describe('find All Sessions', () => {
        it('should return all sessions', async () => {
            const mockSessionDto: ListSessionDto[] = [{
                dataHoraInicio: '16/04/2024 10:00:00',
                dataHoraFim: '16/04/2024 10:04:00',
                status: 'Iniciada',
            },
            {
                dataHoraInicio: '16/04/2024 10:00:00',
                dataHoraFim: '16/04/2024 10:04:00',
                status: 'Iniciada',
           },        
        ];
        jest.spyOn(controller, 'findAllSessions').mockResolvedValue(mockSessionDto);
        const result = await controller.findAllSessions();
        expect(result).toEqual(mockSessionDto); 
        });

    })

})
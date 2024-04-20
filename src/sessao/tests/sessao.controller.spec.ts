import { Test, TestingModule } from "@nestjs/testing";
import { PrismaModule } from "../../prisma/prisma.module";
import { PrismaService } from "../../prisma/prisma.service";
import { CreateSessaoDto } from "../dto/create-sessao.dto";
import { ListSessaoDto } from "../dto/select-sessao.dto";
import { SessaoController } from "../sessao.controller";
import { SessaoService } from "../sessao.service";

describe('SessaoController', () => {
    let controller: SessaoController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [PrismaModule],
            controllers: [SessaoController],
            providers: [SessaoService, PrismaService],
        }).compile();

        controller = module.get<SessaoController>(SessaoController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
      });

    describe('create Session', () => {
        it('should create session', async () => {
            const pautaId = 1;
            const mockSessionDto: CreateSessaoDto = {
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
            const mockSessionDto: ListSessaoDto[] = [{
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
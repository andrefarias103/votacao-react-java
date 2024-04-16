import { PrismaService } from "../../prisma/prisma.service";
import { CreateSessaoDto } from "../dto/create-sessao.dto";
import { ListSessaoDto } from "../dto/select-sessao.dto";
import { SessaoService } from "../sessao.service";


describe('SessionService', () => {
    let service: SessaoService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        prismaService = new PrismaService();
        service = new SessaoService(prismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create Session', () => {
        it('should create Session', async () => {
            const pautaId: number = 1;
            const mockSessionDto: CreateSessaoDto = {
                dataHoraInicio: '15/04/2024 14:00:00',
                dataHoraFim: '15/04/2024 14:30:00',
                status: 'Iniciada',
            };
            jest.spyOn(service, 'createSession').mockResolvedValue(mockSessionDto);
            
            const newSessionDto = await service.createSession(pautaId, mockSessionDto);
            expect(newSessionDto).toEqual(mockSessionDto);
        })
    })

    describe('find all sessions', () => {
        it('should find all sessions', async () => {
            const mockSessionDto: ListSessaoDto[] = [
            {
                dataHoraInicio: '2024-04-15 10:00:00',
                dataHoraFim: '2024-04-15 10:30:00',
                status: 'Iniciada',
            },
            {
                dataHoraInicio: '2024-04-15 11:00:00',
                dataHoraFim: '2024-04-15 11:30:00',
                status: 'Fechada',
            }];
            jest.spyOn(service, 'findAllSessions').mockResolvedValue(mockSessionDto);

            const result: ListSessaoDto[] = await service.findAllSessions();
            expect(result).toHaveLength(2);
            expect(result[0].dataHoraInicio).toBe('2024-04-15 10:00:00');        
            expect(result[0].dataHoraFim).toBe('2024-04-15 10:30:00');        
            expect(result[0].status).toBe('Iniciada');
            expect(result[1].dataHoraInicio).toBe('2024-04-15 11:00:00');        
            expect(result[1].dataHoraFim).toBe('2024-04-15 11:30:00');        
            expect(result[1].status).toBe('Fechada');
        })
    })

})
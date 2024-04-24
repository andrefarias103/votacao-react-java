import { TRepository } from "../../repository/repository";
import { CreateSessaoDto } from "../dto/create-sessao.dto";
import { ListSessaoDto } from "../dto/select-sessao.dto";
import { SessaoService } from "../sessao.service";

describe('SessionService', () => {

    let service: SessaoService;
    let repository: TRepository;

    beforeEach(async () => {
        service = new SessaoService(repository);
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
            };
            jest.spyOn(service, 'createSession').mockResolvedValue(mockSessionDto);
            
            const createSession = await service.createSession(pautaId, mockSessionDto);
            expect(createSession).toEqual(mockSessionDto);
        })
        
        it('should return an error when validating dates', async () => {
            const pautaId: number = 0;
            const mockSessionDto: CreateSessaoDto = {
                dataHoraInicio: '15/04/2024 15:00:00',
                dataHoraFim: '15/04/2024 14:30:00',                
            };
            
            await expect(service.createSession(pautaId, mockSessionDto)).rejects.toThrow(Error);

        })           
    })

    // describe('start sessions', () => {
    //     it('should not find session', async () => {
    //         const mockSessionId = 180;
    //         const mockAgendaId = 1;
    //         const result = await service.startSession(mockSessionId, mockAgendaId) ;
    //         expect(result).toEqual(`Pauta [${mockAgendaId}]: Não foi encontrada'`);
    //     });

    //     it('should not find agenda', async () => {
    //         const mockSessionId = 13;
    //         const mockAgendaId = 100;
    //         await expect(service.startSession(mockSessionId, mockAgendaId)).rejects.toThrow(NotFoundException);
    //     });        

    //     it('should start session', async () => {
    //         const mockSessionId = 13;
    //         const mockAgendaId = 1;
    //         const mockResultValue = true;

    //         const result = await service.startSession(mockSessionId, mockAgendaId);
    //         expect(result).toEqual(mockResultValue);

    //     });              
    // })

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
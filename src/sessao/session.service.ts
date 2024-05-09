import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusSessaoEnum } from '@prisma/client';
import { TRepository } from '../repository/repository';
import { getDateFinal, getDateFormat } from '../utils/date-operations.utils';
import { CreateSessionDto } from './dto/create-session.dto';
import { ListSessionDto } from './dto/select-session.dto';

@Injectable()
export class SessionService {

  private readonly repositoryAgenda: TRepository;

  ////
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('sessao');
    this.repositoryAgenda = new TRepository('pauta');
  }
  
  ////
  public async createSession(agendaId: number, sessionData: CreateSessionDto): Promise<CreateSessionDto> {
    
      const agenda = await this.repositoryAgenda.findById({ where: { id: agendaId}});
      if (agenda === null) { 
        throw new NotFoundException(`Pauta [${agendaId}]: Não foi encontrada'`)
      };
    
      const datetime_final: Date = getDateFinal(sessionData.dataHoraInicio, sessionData.dataHoraFim );
      const datetime_initial = new Date(sessionData.dataHoraInicio);  
      if (datetime_final <= datetime_initial) {
        throw new Error('Data hora final é menor ou igual a data hora inicial');
      }

      const createSession: CreateSessionDto = await this.repository.create(
        { 
                dataHoraInicio: sessionData.dataHoraInicio, 
                dataHoraFim: getDateFormat(datetime_final),
                Pauta: { connect: { id: agenda?.id }}, 
                status: StatusSessaoEnum.STATUS_AGUARDANDO,
      });    
      return createSession;
      
  }

  ////
  public async startAllSessions(): Promise<Boolean>  {
    const dataAtual =  getDateFormat(new Date(Date.now())); //.toISOString().split('T')[0];
    // console.log(`******************************************verifca data e hora ${dataAtual}`);
    const sessions = await this.repository.findByWhere({ 
                                                          status: StatusSessaoEnum.STATUS_AGUARDANDO,
                                                          dataHoraInicio: { lte: dataAtual},
                                                          dataHoraFim: { gte: dataAtual}
                                                        });
    if (sessions === null) {                                             
      return false;
    }

    sessions.map( (session) => { 
      this.repository.update({ status: StatusSessaoEnum.STATUS_INICIADA}, { id: session.id});        
    });

    return true;

  }  

  ////
  public async finishAllSessions() {
    const dataAtual =  getDateFormat(new Date(Date.now())); //.toISOString().split('T')[0];
    const sessions = await this.repository.findByWhere({ 
                                                          status: StatusSessaoEnum.STATUS_INICIADA,
                                                          dataHoraInicio: { lte: dataAtual},
                                                          dataHoraFim: { lte: dataAtual}
                                                        });
    if (sessions !== null) {
      return sessions.map( (session) => { 
        this.repository.update({ status: StatusSessaoEnum.STATUS_CONCLUIDA}, { id: session.id});
      })
    }
  }

  ////
  public async findAllSessions(): Promise<ListSessionDto[]> {
    const sessions: ListSessionDto[] = await this.repository.findAll();
    if (sessions === null) {
      throw new NotFoundException('Nenhuma sessão encontrada');
    }
    return sessions.map((session) => ({
      dataHoraInicio: session.dataHoraInicio,
      dataHoraFim: session.dataHoraFim,
      status: session.status
    }));
  }

  ////
  public async findSessionByAgenda(agendaId: number): Promise<ListSessionDto[]> {

    const sessions = this.repository.findById({ where: { agendaId: agendaId}});
    if (sessions === null) {
      throw new NotFoundException('Sessões não foram encontradas')
  };      
 
   return sessions;   
  }

}

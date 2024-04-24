import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { getDateFinal, getDateFormat } from '../utils/date-operations.utils';
import { CreateSessionDto } from './dto/create-session.dto';
import { ListSessionDto } from './dto/select-session.dto';

@Injectable()
export class SessionService {

  private readonly repositoryAgenda: TRepository;

  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('sessao');
    this.repositoryAgenda = new TRepository('pauta');
  }

  // ////
  // private getDateFinal(date_initial: string, date_final: string): Date {    
  //   const dt_initial = new Date(date_initial);
  //   let dte_final: Date;
  //   if (date_final === undefined) {
  //     dte_final = new Date(dt_initial.setMinutes(dt_initial.getMinutes() + 1));        
  //   }
  //   else {
  //     dte_final = new Date(date_final);
  //   }    
  //   return dte_final;
  // }

  // ////
  // private getDateFormat( date: Date): string {     
  //   const dateFormat = date.toLocaleString('pt-BR', {
  //       year: 'numeric',
  //       month: '2-digit',
  //       day: '2-digit',
  //       hour: '2-digit',
  //       minute: '2-digit',
  //       second: '2-digit',
  //       hour12: false, 
  //   });
  //   const splitDate = dateFormat.split(', ');
  //   const partDate = splitDate[0].split('/');
  //   const partHour = splitDate[1].split(':');
  //   const dateFormatted = `${partDate[2]}-${partDate[1]}-${partDate[0]} ${partHour.join(':')}`;    
  //   return dateFormatted;
  // }
  
  ////
  public async createSession(agendaId: number, sessionData: CreateSessionDto): Promise<CreateSessionDto> {
    
      const agenda = await this.repositoryAgenda.findById({ id: agendaId});
      if (agenda === null) { 
        throw new NotFoundException(`Pauta [${agendaId}]: Não foi encontrada'`)
      };
    
      const datetime_final: Date = getDateFinal(sessionData.dataHoraInicio, sessionData.dataHoraFim );
      const datetime_initial = new Date(sessionData.dataHoraInicio);  
      if (datetime_final <= datetime_initial) {
        throw new Error('Data hora final é menor ou igual a data hora inicial');
      }

      const createSession: CreateSessionDto = await this.repository.create(
        { dataHoraInicio: sessionData.dataHoraInicio, 
                dataHoraFim: getDateFormat(datetime_final),
                pauta: { connect: { id: agenda?.id }}, 
                status: 'STATUS_INICIADA',
      });    
      return createSession;
      
  }

  
  // public async startSession(sessionId: number, agendaId: number): Promise<boolean> {

          
  //         const sessao = await this.repository.findById({ id: sessionId});
  //         if (sessao === null) {            
  //           throw new NotFoundException(`Sessão [${sessionId}]: Não foi encontrada'`)
  //         };

  //         const agenda = await this.repositoryAgenda.findById({ id: agendaId});
  //         if (agenda === null) { 
  //           throw new NotFoundException(`Pauta [${agendaId}]: Não foi encontrada'`)
  //         };          

  //         await this.repository.update( {
  //                                         status: 'STATUS_INICIADA',
  //                                       },
  //                                       { 
  //                                         id: sessionId, pautaId: agendaId 
  //                                       },);

  //         return true;

  // }

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

}

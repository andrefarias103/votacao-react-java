import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';
import { getDateFinal, getDateFormat } from './utils/date-operations.utils';

@Injectable()
export class SessaoService {

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
  public async createSession(pautaId: number, dadosSessao: CreateSessaoDto): Promise<CreateSessaoDto> {
    
      const date_final: Date = getDateFinal(dadosSessao.dataHoraInicio, dadosSessao.dataHoraFim );
      const date_initial = new Date(dadosSessao.dataHoraInicio);  
      if (date_final <= date_initial) {
        throw new Error('Data hora final é menor ou igual a data hora inicial');
      }
      const agenda = await this.repositoryAgenda.findById({ id: pautaId});
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };
      const session: CreateSessaoDto = await this.repository.create(
        { dataHoraInicio: dadosSessao.dataHoraInicio, 
                dataHoraFim: getDateFormat(date_final),
                pauta: { connect: { id: agenda?.id }}, 
      });    
      return session;
      
  }

  ////
  public async startSession(sessionId: number, agendaId: number): Promise<boolean> {
    //try {    

          const sessao = await this.repository.findById({ id: sessionId});
          if (sessao === null) {            
            throw new NotFoundException(`Sessão [${sessionId}]: Não foi encontrada'`)
          };

          const agenda = await this.repositoryAgenda.findById({ id: agendaId});
          if (agenda === null) { 
            throw new NotFoundException(`Pauta [${agendaId}]: Não foi encontrada'`)
          };          

          await this.repository.update( {
                                          status: 'STATUS_INICIADA',
                                        },
                                        { 
                                          id: sessionId, pautaId: agendaId 
                                        },);

          return true;
    // }
    // catch(error) {
    //   console.log(error);
    //   return false;
    // }
  }

  ////
  public async findAllSessions(): Promise<ListSessaoDto[]> {
    const sessions: ListSessaoDto[] = await this.repository.findAll();
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

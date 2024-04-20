import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';
import { StatusSessaoEnum } from './enums/status-sessao.enum';

@Injectable()
export class SessaoService {

  constructor(private readonly prisma: PrismaService) {}

  ////
  private getDateFinal(date_initial: string, date_final: string): Date {    
    const dt_initial = new Date(date_initial);
    let dte_final: Date;
    if (date_final === undefined) {
      dte_final = new Date(dt_initial.setMinutes(dt_initial.getMinutes() + 1));        
    }
    else {
      dte_final = new Date(date_final);
    }    
    return dte_final;
  }

  ////
  private getDateFormat( date: Date): string {     
    const dateFormat = date.toLocaleString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, 
    });
    const splitDate = dateFormat.split(', ');
    const partDate = splitDate[0].split('/');
    const partHour = splitDate[1].split(':');
    const dateFormatted = `${partDate[2]}-${partDate[1]}-${partDate[0]} ${partHour.join(':')}`;    
    return dateFormatted;
  }
  
  ////
  public async createSession(pautaId: number, dadosSessao: CreateSessaoDto): Promise<CreateSessaoDto> {
    
      const date_final: Date = this.getDateFinal(dadosSessao.dataHoraInicio, dadosSessao.dataHoraFim );
      const date_initial = new Date(dadosSessao.dataHoraInicio);  
      if (date_final <= date_initial) {
        throw new Error('Data hora final é menor ou igual a data hora inicial');
      }
      const agenda = await this.prisma.pauta.findUnique({ where: { id: pautaId}});
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };
      const session: CreateSessaoDto = await this.prisma.sessao.create({
        data: { dataHoraInicio: dadosSessao.dataHoraInicio, 
                //dataHoraFim: (new Intl.DateTimeFormat('fr-CA',{year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}).format(date_final)), 
                dataHoraFim: this.getDateFormat(date_final),
                status: StatusSessaoEnum.STATUS_AGUARDANDO, 
                pauta: { connect: { id: agenda?.id }}, },
      });    
      return session;
      
  }

  ////
  public async startSession(SessionId: number, AgendaId: number): Promise<boolean> {
    const Session = await this.prisma.sessao.update({ 
      where: { id: SessionId, pautaId: AgendaId },
      data: {
        status: StatusSessaoEnum.STATUS_INICIADA
      }});
    return false;
  }

  ////
  public async findAllSessions(): Promise<ListSessaoDto[]> {
    const sessions: ListSessaoDto[] = await this.prisma.sessao.findMany();
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

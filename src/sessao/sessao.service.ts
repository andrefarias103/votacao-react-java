import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';
import { StatusSessaoEnum } from './enums/status-sessao.enum';

@Injectable()
export class SessaoService {
  constructor(private readonly prisma: PrismaService) {}

  private getDateFinal(date_initial: string, date_final: string): Date {
    const dt_initial = new Date(date_initial);
    let dte_final: Date;

    if (date_final === null) {
      dte_final = new Date(date_final);
    }
    else {
      dte_final = new Date(dt_initial.setMinutes(dt_initial.getMinutes() + 1));
    }    
    return dte_final;
  }

  public async createSession(pautaId: number, dadosSessao: CreateSessaoDto): Promise<CreateSessaoDto> {

    try {
      
      const date_final: Date = this.getDateFinal(dadosSessao.dataHoraInicio, dadosSessao.dataHoraFim );
      const date_initial = new Date(dadosSessao.dataHoraInicio);
  
      if (date_final <= date_initial) {
        throw new NotFoundException('Data hora final é menor ou igual a data hora inicial');
      }

      const agenda = await this.prisma.pauta.findUnique({ where: { id: pautaId}});
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };

      const session: CreateSessaoDto = await this.prisma.sessao.create({
        data: { dataHoraInicio: dadosSessao.dataHoraInicio, 
                dataHoraFim: date_final.toLocaleString(), 
                status: StatusSessaoEnum.STATUS_AGUARDANDO, 
                pauta: { connect: { id: agenda?.id }}, },
      });    

      return session;

    }
    catch(error) {
      console.error('Erro ao criar sessão:', error);
      throw error;
    }
  }

  public async startSession(SessionId: number, AgendaId: number): Promise<boolean> {
    const Session = await this.prisma.sessao.update({ 
      where: { id: SessionId, pautaId: AgendaId },
      data: {
        status: StatusSessaoEnum.STATUS_INICIADA
      }});
    return false;
  }

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

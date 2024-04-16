import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async createSession(pautaId: number, dadosSessao: CreateSessaoDto) {

    const agenda = await this.prisma.pauta.findUnique({ where: { id: pautaId}});
    if (agenda === null) { 
      throw new NotFoundException('Pauta não foi encontrada')
    };

    const session: CreateSessaoDto = await this.prisma.sessao.create({
      data: { dataHoraInicio: dadosSessao.dataHoraInicio, 
              dataHoraFim: dadosSessao.dataHoraFim, 
              status: dadosSessao.status, 
              pauta: { connect: { id: agenda?.id }}, },
    });    
    return session;
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

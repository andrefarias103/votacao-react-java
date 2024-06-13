import { Injectable, NotFoundException } from "@nestjs/common";
import { StatusSessaoEnum } from "@prisma/client";
import { plainToInstance } from "class-transformer";
import { TRepository } from "../repository/repository";
import { getDateFinal, getDateFormat } from "../utils/date-operations.utils";
import { CreateSessionDto } from "./dto/create-session.dto";
import { ListSessionDto } from "./dto/select-session.dto";

@Injectable()
export class SessionService {
  private readonly repositoryAgenda: TRepository;

  ////
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository("sessao");
    this.repositoryAgenda = new TRepository("pauta");
  }

  ////
  public async createSession(
    sessionData: CreateSessionDto,
  ): Promise<ListSessionDto> {
    const datetime_final: Date = getDateFinal(
      sessionData.dataHoraInicio,
      sessionData.dataHoraFim,
    );

    const datetime_initial = new Date(sessionData.dataHoraInicio);
    if (datetime_final <= datetime_initial) {
      throw new Error("Data hora final é menor ou igual a data hora inicial");
    }

    const createSession: CreateSessionDto = await this.repository.create({
      data: {
        dataHoraInicio: sessionData.dataHoraInicio,
        dataHoraFim: getDateFormat(datetime_final),
        status: StatusSessaoEnum.STATUS_AGUARDANDO,
      },
    });
    return plainToInstance(ListSessionDto, createSession);
  }

  ////
  public async startAllSessions(): Promise<Boolean> {
    const dataAtual = getDateFormat(new Date(Date.now()));
    const sessions = await this.repository.findByWhere({
      where: {
        status: StatusSessaoEnum.STATUS_AGUARDANDO,
        dataHoraInicio: { lte: dataAtual },
        dataHoraFim: { gte: dataAtual },
      },
    });
    if (sessions === null) {
      return false;
    }

    sessions.map((session) => {
      this.repository.update({
        where: { id: session.id },
        data: { status: StatusSessaoEnum.STATUS_INICIADA },
      });
    });

    return true;
  }

  ////
  public async finishAllSessions() {
    const dataAtual = getDateFormat(new Date(Date.now())); //.toISOString().split('T')[0];
    const sessions = await this.repository.findByWhere({
      where: {
        status: StatusSessaoEnum.STATUS_INICIADA,
        dataHoraInicio: { lte: dataAtual },
        dataHoraFim: { lte: dataAtual },
      },
    });
    if (sessions !== null) {
      return sessions.map((session) => {
        this.repository.update({
          where: { id: session.id },
          data: { status: StatusSessaoEnum.STATUS_CONCLUIDA },
        });
      });
    }
  }

  ////
  public async findAllSessions(): Promise<ListSessionDto[]> {
    const sessions: ListSessionDto[] = await this.repository.findAll();
    if (sessions === null) {
      throw new NotFoundException("Nenhuma sessão encontrada");
    }

    const listSessions: ListSessionDto[] = sessions.map(
      (item: ListSessionDto) => {
        item.dataHoraInicio = new Date(item.dataHoraInicio).toLocaleString();
        item.dataHoraFim = new Date(item.dataHoraFim).toLocaleString();
        return {
          ...item,
          dataHoraInicio: item.dataHoraInicio,
          dataHoraFim: item.dataHoraFim,
        };
      },
    );

    return listSessions;
  }

  ////
  public async findSessionByAgenda(
    agendaId: number,
  ): Promise<ListSessionDto[]> {
    const sessions = this.repository.findById({
      where: { agendaId: agendaId },
    });
    if (sessions === null) {
      throw new NotFoundException("Sessões não foram encontradas");
    }
    return sessions;
  }

  public async findSessionById(id: number): Promise<ListSessionDto[]> {
    const session: ListSessionDto[] = await this.repository.findById({
      where: { id },
    });
    if (!session) {
      return [];
    }
    return plainToInstance(ListSessionDto, session);
  }

  ////
  public async updateSession(id: number, dataSession: CreateSessionDto) {
    const session: CreateSessionDto = await this.repository.update({
      where: { id: Number(id) },
      data: {
        dataHoraInicio: dataSession.dataHoraInicio,
        dataHoraFim: dataSession.dataHoraFim,
      },
    });
    return session;
  }
}
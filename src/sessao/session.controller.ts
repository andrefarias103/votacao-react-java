import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { ListSessionDto } from './dto/select-session.dto';
import { SessionService } from './session.service';

@Controller('sessao')
export class SessionController {
  constructor(private readonly sessaoService: SessionService) {}

  @Post()
  async createSession(@Query('pautaId') agendaId: number, @Body() dataSession: CreateSessionDto): Promise<CreateSessionDto> {
    const session: CreateSessionDto = await this.sessaoService.createSession(agendaId, dataSession);
    return session;
  }

  @Get()
  async findAllSessions(): Promise<ListSessionDto[]> {
    return await this.sessaoService.findAllSessions();
  }

  // @Patch()
  // async startSession(@Query('sessionId') sessionId: number, @Query('pautaId') agendaId: number): Promise<boolean> {
  //   return await this.sessaoService.startSession(sessionId, agendaId);
  // }

}

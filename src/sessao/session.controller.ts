import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { ListSessionDto } from './dto/select-session.dto';
import { SessionService } from './session.service';

@Controller('sessao')
export class SessionController {
  constructor(private readonly sessaoService: SessionService) {}

  @Post()
  async createSession(@Body() dataSession: CreateSessionDto): Promise<CreateSessionDto> {
    const session: CreateSessionDto = await this.sessaoService.createSession(dataSession);
    return session;
  }  

  @Get()
  async findAllSessions(): Promise<ListSessionDto[]> {
    return await this.sessaoService.findAllSessions();
  }

  @Get('/filtro_pauta/:pautaId')
  async findSessionByAgenda(@Param('pautaId') agendaId: number): Promise<ListSessionDto[]> {
    return await this.sessaoService.findSessionByAgenda(agendaId);
  }

  @Get('/:sessaoId')
  async findSession(@Param('sessaoId') sessionId: number) {
    return await this.sessaoService.findSessionById(sessionId);
  }

  @Put(':id')
  async updateSession(@Param('id') id: number, @Body() dataSession: CreateSessionDto) {
    return await this.sessaoService.updateSession(id, dataSession);
  }

}

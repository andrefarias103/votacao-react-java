import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';
import { SessaoService } from './sessao.service';

@Controller('sessao')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  async createSession(@Query('pautaId') pautaId: number, @Body() dadosSessao: CreateSessaoDto): Promise<CreateSessaoDto> {
    const session: CreateSessaoDto = await this.sessaoService.createSession(pautaId, dadosSessao);
    return session;
  }

  @Get()
  async findAllSessions(): Promise<ListSessaoDto[]> {
    return await this.sessaoService.findAllSessions();
  }

  @Patch()
  async startSession(@Query('sessionId') sessionId: number, @Query('pautaId') agendaId: number): Promise<boolean> {
    return await this.sessaoService.startSession(sessionId, agendaId);
  }

}

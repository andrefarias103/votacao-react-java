import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { ListSessaoDto } from './dto/select-sessao.dto';
import { SessaoService } from './sessao.service';

@Controller('sessao')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  async createSession(@Query('pautaId') pautaId: number, @Body() dadosSessao: CreateSessaoDto): Promise<CreateSessaoDto> {
    const newSessao: CreateSessaoDto = await this.sessaoService.createSession(pautaId, dadosSessao);
    return newSessao;
  }

  @Get()
  async findAllSessions(): Promise<ListSessaoDto[]> {
    return await this.sessaoService.findAllSessions();
  }

}

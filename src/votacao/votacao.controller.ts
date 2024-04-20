import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateVotacaoDto } from './dto/create-votacao.dto';
import { UpdateVotacaoDto } from './dto/update-votacao.dto';
import { VotacaoService } from './votacao.service';

@Controller('votacao')
export class VotacaoController {
  constructor(private readonly votacaoService: VotacaoService) {}

  @Post()
  public async createVotacao(@Query('usuarioId') usuarioId: number, @Query('pautaId') pautaId: number, @Body() dadosVotacao: CreateVotacaoDto): Promise<CreateVotacaoDto> {
    return await this.votacaoService.createVotacao(usuarioId, pautaId, dadosVotacao);
  }

  @Get()
  findAll() {
    return this.votacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotacaoDto: UpdateVotacaoDto) {
    return this.votacaoService.update(+id, updateVotacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votacaoService.remove(+id);
  }
}

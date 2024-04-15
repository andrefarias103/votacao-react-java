import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';
import { SessaoService } from './sessao.service';

@Controller('sessao')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  async createSessao(@Query('pautaId') pautaId: number, @Body() dadosSessao: CreateSessaoDto) {
    const newSessao: CreateSessaoDto = await this.sessaoService.createSessao(pautaId, dadosSessao);
    return newSessao;
  }

  @Get()
  findAll() {
    return this.sessaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessaoDto: UpdateSessaoDto) {
    return this.sessaoService.update(+id, updateSessaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessaoService.remove(+id);
  }
}

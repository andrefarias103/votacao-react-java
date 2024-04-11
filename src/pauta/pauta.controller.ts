import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePautaDto } from './dto/create-pauta.dto';
import { PautaService } from './pauta.service';

@Controller('pauta')
export class PautaController {
  constructor(private readonly pautaService: PautaService) {}

  @Post()
  async createPauta(@Query() categoriaId: number, @Body() dadosPauta: CreatePautaDto) {
    return await this.pautaService.createPauta(categoriaId, dadosPauta);
  }

  @Get()
  findAll() {
    return this.pautaService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.pautaService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePautaDto: UpdatePautaDto) {
  //   return this.pautaService.update(+id, updatePautaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pautaService.remove(+id);
  // }
}

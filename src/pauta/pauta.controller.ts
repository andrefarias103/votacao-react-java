import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePautaDto } from './dto/create-pauta.dto';
import { ListPautaDto } from './dto/select-pauta.dto';
import { PautaService } from './pauta.service';

@Controller('pauta')
export class PautaController {
  constructor(private readonly pautaService: PautaService) {}

  @Post()
  async createPauta(@Query('categoriaId') categoriaId: number, @Body() dadosPauta: CreatePautaDto) {
    return await this.pautaService.createPauta(categoriaId, dadosPauta);
  }

  @Get()
  async findAllPautas(): Promise<ListPautaDto[]> {
    return await this.pautaService.findAllPautas();
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

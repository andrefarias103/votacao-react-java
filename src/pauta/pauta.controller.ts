import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreatePautaDto } from './dto/create-pauta.dto';
import { ListPautaDto } from './dto/select-pauta.dto';
import { PautaService } from './pauta.service';

@Controller('pauta')
export class PautaController {
  constructor(private readonly pautaService: PautaService) {}

  @Post()
  async createAgenda(@Query('categoriaId') categoriaId: number, @Body() dadosPauta: CreatePautaDto): Promise<CreatePautaDto> {
    const newPauta: CreatePautaDto = await this.pautaService.createAgenda(categoriaId, dadosPauta);
    return newPauta;
  }

  @Get()
  async findAllAgendas(): Promise<ListPautaDto[]> {
    return await this.pautaService.findAllAgendas();
  }

  @Get('/:categoriaId')
  async findAgendasByCategory(@Param('categoriaId') categoriaId: number) {
    return await this.pautaService.findAgendasByCategory(categoriaId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePautaDto: UpdatePautaDto) {
  //   return this.pautaService.update(+id, updatePautaDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.pautaService.remove(+id);
  // }
}

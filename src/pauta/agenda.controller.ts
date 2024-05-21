import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { ListAgendaDto } from './dto/select-agenda.dto';

@Controller('/pauta')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post(':usuarioId')
  async createAgenda(@Param('usuarioId') userId: number, @Body() dataAgenda): Promise<CreateAgendaDto> {
    const agenda: CreateAgendaDto = await this.agendaService.createAgenda(userId, dataAgenda);
    return agenda;
  }

  @Get('/liberadas/:categoriaId')
  async findStartAgendasByCategory(@Param('categoriaId') categoryId: number) {
    return await this.agendaService.findStartAgendasByCategory(categoryId);
  }    

  @Get('/liberadas')
  async findStartAgendas() {
    return await this.agendaService.findStartAgendasByCategory();
  }

  @Get('/filtro_id/:id')
  async findUserById(@Param('id') id: number) {
    return await this.agendaService.findAgendaById(id);
  }
  
  @Get('/filtro_nome/:nome')
  async findAgendaByName(@Param('nome') nome: string) {
    return await this.agendaService.findAgendaByName(nome);
  }  

  @Get()
  async findAllAgendas(): Promise<ListAgendaDto[]> {
    return await this.agendaService.findAllAgendas();
  }

  @Get('/:categoriaId')
  async findAgendasByCategory(@Param('categoriaId') categoryId: number) {
    return await this.agendaService.findAgendasByCategory(categoryId);
  }

  @Get('/:pautaId')
  async findAgenda(@Param('pautaId') agendaId: number) {
    return await this.agendaService.findAgenda(agendaId);
  }

  @Put(':id')
  async updateAgenda(@Param('id') id: number, @Body() dataAgenda) {
    return await this.agendaService.updateAgenda(id, dataAgenda);
  }

  @Delete(':id')
  async deleteAgenda(@Param('id') id: number) {
    return await this.agendaService.deleteAgenda(id);
  }

}

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { ListAgendaDto } from './dto/select-agenda.dto';

@Controller('pauta')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  async createAgenda(@Query('usuarioId') userId: number, @Query('categoriaId') categoryId: number, @Body() dataAgenda: CreateAgendaDto): Promise<CreateAgendaDto> {
    const agenda: CreateAgendaDto = await this.agendaService.createAgenda(userId, categoryId, dataAgenda);
    return agenda;
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


}

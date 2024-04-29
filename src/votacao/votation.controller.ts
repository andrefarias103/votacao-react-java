import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateVotationDto } from './dto/create-votation.dto';
import { UpdateVotationDto } from './dto/update-votation.dto';
import { VotationService } from './votation.service';

@Controller('votacao')
export class VotationController {
  constructor(private readonly votationService: VotationService) {}

  @Post()
  public async createVotacao(@Query('usuarioId') userId: number, @Query('pautaId') agendaId: number, @Query('sessaoId') sessionId: number, @Body() dataVotation: CreateVotationDto) {
    return await this.votationService.createVotacao(userId, agendaId, sessionId, dataVotation);
  }

  @Get()
  findAll() {
    return this.votationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votationService.findOne(+id);
  }

  @Get('total_votes/:pautaId')
  public async getTotalVotes(@Param('pautaId') agendaId: number): Promise<number> {
    const totalVotes = await this.votationService.getTotalVotes(agendaId);
    return totalVotes;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotationDto: UpdateVotationDto) {
    return this.votationService.update(+id, updateVotationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votationService.remove(+id);
  }


}

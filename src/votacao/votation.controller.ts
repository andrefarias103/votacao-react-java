import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateVotationDto } from './dto/create-votation.dto';
import { UpdateVotationDto } from './dto/update-votation.dto';
import { VotationService } from './votation.service';

@Controller('votacao')
export class VotationController {
  constructor(private readonly votationService: VotationService) {}

  @Post(':usuarioId')
  public async createVotacao(@Param('usuarioId') usuarioId: number, @Body() dataVotation: CreateVotationDto) {
    return await this.votationService.createVotacao(usuarioId, dataVotation);
  }

  @Get()
  findAll() {
    return this.votationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votationService.findOne(+id);
  }

  @Get('verifica_voto/:pautaId/:cpf')
  public async getVerifyVoteUser(@Param('pautaId') agendaId: number, @Param('cpf') cpf: string): Promise<number> {
    return await this.votationService.getVerifyVoteUser(agendaId, cpf);
  }

  @Get('total_votes/:pautaId')
  public async getTotalVotes(@Param('pautaId') agendaId: number): Promise<number> {
    const totalVotes = await this.votationService.getTotalVotes(agendaId);
    return totalVotes;
  }

  @Patch(':id')
  update(@Query('id') id: string, @Body() updateVotationDto: UpdateVotationDto) {
    return this.votationService.update(+id, updateVotationDto);
  }

  @Delete(':id')
  remove(@Query('id') id: string) {
    return this.votationService.remove(+id);
  }


}

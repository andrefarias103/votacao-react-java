import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from './../autenticacao/authentication.guard';
import { Roles } from './../autenticacao/roles';
import { RolesGuard } from './../autenticacao/roles.guard';
import { UserProfileEnum } from './../usuario/enums/user-profile.enum';
import { CreateVotationDto } from './dto/create-votation.dto';
import { VotationService } from './votation.service';

@Controller('votacao')
export class VotationController {
  constructor(private readonly votationService: VotationService) {}

  @Post(':usuarioId')
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard,RolesGuard)
  public async createVotacao(@Param('usuarioId') usuarioId: number, @Body() dataVotation: CreateVotationDto) {
    return await this.votationService.createVotacao(usuarioId, dataVotation);
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

}

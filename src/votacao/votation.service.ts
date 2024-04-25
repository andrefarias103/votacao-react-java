import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { getDateFormat } from '../utils/date-operations.utils';
import { CreateVotationDto } from './dto/create-votation.dto';
import { UpdateVotationDto } from './dto/update-votation.dto';

@Injectable()
export class VotationService {

    private readonly repositoryUser: TRepository;
    private readonly repositoryAgenda: TRepository;

    constructor(private readonly repository: TRepository) {
      this.repositoryUser = new TRepository('usuario');
      this.repositoryAgenda = new TRepository('pauta');      
      this.repository = new TRepository('Votacao');      
    }

  async createVotacao(userId: number, agendaId: number, dataVotation: CreateVotationDto) {

      const user = await this.repositoryUser.findById({ id: userId});
      if (user === null) { 
        throw new NotFoundException('Usuário não foi encontrado')
      };
  
      const agenda = await this.repositoryAgenda.findById({  id: agendaId });
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };

      const userVoted = await this.repository.findById({ id: user.id, pautaId: agenda.id });
      if (userVoted !== null) { 
        throw new Error(`Usuário [${user.nome}]: já votou!!!'`)
      };

      const datatime_now = new Date(Date.now());      
      const vote: CreateVotationDto = await this.repository.create({
          opcaoVotada: dataVotation.opcaoVotada,
          dataHoraVoto: getDateFormat(datatime_now),
          usuarioId: userId,
          pautaId: agendaId,
      });

      return vote;
  }


  async getTotalVotes(agendaId: number): Promise<number> {

    const agenda = await this.repositoryAgenda.findById({ id: agendaId});
    if (agenda === null) { 
      throw new NotFoundException(`Pauta [${agendaId}]: não encontrada'`)
    };

    const totalVotes = await this.repository.recordCountById({ pautaId: agendaId });
    console.log(`Total de Votos: ${totalVotes}`);

    const totalVotesYes = await this.repository.recordCountById({ pautaId: agendaId, opcaoVotada: 'Sim' });
    console.log(`Total de Votos (Sim): ${totalVotesYes}`);

    const totalVotesNo = await this.repository.recordCountById({ pautaId: agendaId, opcaoVotada: 'Não' });
    console.log(`Total de Votos (Não): ${totalVotesNo}`);
    return totalVotes;
  }




  findAll() {
    return `This action returns all votacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votacao`;
  }

  update(id: number, updateVotacaoDto: UpdateVotationDto) {
    return `This action updates a #${id} votacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} votacao`;
  }
}
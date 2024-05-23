import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { getDateFormat } from '../utils/date-operations.utils';
import { CreateVotationDto } from './dto/create-votation.dto';
import { UpdateVotationDto } from './dto/update-votation.dto';

@Injectable()
export class VotationService {

    private readonly repositoryUser: TRepository;
    private readonly repositoryAgenda: TRepository;
    private readonly repositorySession: TRepository;

    constructor(private readonly repository: TRepository) {
      this.repositoryUser = new TRepository('usuario');
      this.repositoryAgenda = new TRepository('pauta');      
      this.repository = new TRepository('Votacao');    
      this.repositorySession = new TRepository('Sessao');
    }

  async createVotacao(usuarioId: number, dataVotation: CreateVotationDto) {
      
      const { pautaId } = dataVotation;

      const user = await this.repositoryUser.findById({ where: { id: usuarioId }});    
      if (user === null) { 
        throw new NotFoundException('Usuário não foi encontrado')
      };
  
      const agenda = await this.repositoryAgenda.findById({ where: {  id: pautaId }});
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };

      // const userVoted = await this.repository.findFirst({ where: { AND: [ {usuarioId: user.id} , {pautaId: agenda.id} ] }});
      
      // if (userVoted !== null) { 
      //   throw new HttpException(`Usuário [${user.nome}]: já votou!!!'`, HttpStatus.FORBIDDEN);
      // };

      const datatime_now = new Date(Date.now());      
      const vote: CreateVotationDto = await this.repository.create({data: {
          opcaoVotada: dataVotation.opcaoVotada,
          dataHoraVoto: getDateFormat(datatime_now),
          usuarioId: user.id,
          pautaId,
      }});

      return vote;
  }

  ///
  async getVerifyVoteUser(agendaId: number, cpf: string): Promise<number> {

    const user = await this.repositoryUser.findById({ where: { cpf }});    
    if (user === null) { 
      throw new NotFoundException('Usuário não foi encontrado')
    };

    const agenda = await this.repositoryAgenda.findById({ where: {  id: agendaId }});
    if (agenda === null) { 
      throw new NotFoundException('Pauta não foi encontrada')
    };

    const userVoted = await this.repository.findFirst({ where: { AND: [ {usuarioId: user.id} , {pautaId: agenda.id} ] }});
    
    if (userVoted !== null) { 
      throw new HttpException(`Usuário [${user.nome}]: já votou!!!'`, HttpStatus.FORBIDDEN);
    };    

    return user.id;
  }

  ////
  async getTotalVotes(agendaId: number): Promise<number> {
    const agenda = await this.repositoryAgenda.findById({ where:  { id: agendaId} });
    if (agenda === null) { 
      throw new NotFoundException(`Pauta [${agendaId}]: não encontrada'`)
    };

    const totalVotes = await this.repository.recordCountById({ pautaId: agendaId });
    
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

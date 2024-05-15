import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { StatusSessaoEnum } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { TRepository } from '../repository/repository';
import { UserPerfilEnum } from '../usuario/enums/user-perfil.enum';
import { VotationService } from '../votacao/votation.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { ListAgendaDto } from './dto/select-agenda.dto';

@Injectable()
export class AgendaService {
  
  private readonly repositoryCategory: TRepository;
  private readonly repositoryUser: TRepository;
  private readonly repositoryVotation: TRepository;

  ////
  constructor(private readonly repositoryAgenda: TRepository, private readonly serviceVotation: VotationService) 
  {
    this.repositoryAgenda = new TRepository('pauta');
    this.repositoryCategory = new TRepository('categoria');
    this.repositoryUser = new TRepository('usuario');
    this.repositoryVotation = new TRepository('votacao');
  }

  ////
  public async createAgenda(userId: number, categoryId: number, dataAgenda: CreateAgendaDto): Promise<CreateAgendaDto> 
  {
    const category = await this.repositoryCategory.findById({ where: { id: categoryId}});
    if (category === null) { throw new NotFoundException('Categoria não foi encontrada')};

    const user = await this.repositoryUser.findById({ where: { id: userId }});
    if (user === null) {
      throw new NotFoundException(`Usuário [${userId}]: Não foi encontrado'`);      
    } 

    if (user.tipo === UserPerfilEnum.PERFIL_USUARIO_COMUM) {
      throw new HttpException(`Usuário[${userId}]: Não tem perfil de Administrador`, HttpStatus.FORBIDDEN);
    }    

    const agenda: CreateAgendaDto = await this.repositoryAgenda.create(
      {          
        titulo: dataAgenda.titulo, 
        descricao: dataAgenda.descricao,        
        categoria: { connect: { id: categoryId}},   
        usuario:   { connect: { id: userId }},
      });

    return agenda;
  }

  ////
  public async findAllAgendas(): Promise<ListAgendaDto[]> {    

    const agendas: ListAgendaDto[] = await this.repositoryAgenda.findAll({include: { categoria: true, Sessao: true, votacao: true}});
    if (agendas === null) {
      throw new NotFoundException('Nenhuma agenda foi encontrada')
    };          
    const agendasComVotos = await Promise.all(agendas.map(async agenda => {
      if (agenda.Sessao) {
        agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
        agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
      }
      const quantidadeVotos = await this.serviceVotation.getTotalVotes(agenda.id);
      return { ...agenda, quantidadeVotos };
    }));

    return plainToInstance( ListAgendaDto, agendasComVotos);    
  }

  ////
  public async findAgendasByCategory(categoryId: number): Promise<ListAgendaDto[]> {
      
    const category = await this.repositoryCategory.findById({ where: { id: categoryId }});      
      if (category === null) {
          throw new NotFoundException('Categoria não foi encontrada')
      };
      
      const agendas: ListAgendaDto[]  = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { categoriaId: categoryId}});
      if (agendas === null) {
        throw new NotFoundException('Agenda não foi encontrada');
       };      

      const itemAgendas = agendas.map((item) => { 
        return this.serviceVotation.getTotalVotes(item.id)
      });

      const agendasComVotos = await Promise.all(agendas.map(async agenda => {
        const quantidadeVotos = await this.serviceVotation.getTotalVotes(agenda.id);
        return { ...agenda, quantidadeVotos };
      }));

      return plainToInstance( ListAgendaDto, agendasComVotos);     

  }

  ////
  public async findStartAgendasByCategory(categoryId?: number): Promise<ListAgendaDto[]> {
      
    let agendas: ListAgendaDto[];

    if (categoryId) {
      const category = await this.repositoryCategory.findById({ where: { id: categoryId }});      
      if (category === null) {
          throw new NotFoundException('Categoria não foi encontrada')
      };
      agendas = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { categoriaId: categoryId, Sessao: {status: StatusSessaoEnum.STATUS_INICIADA}}});   
    } 
    else {      
      agendas = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { Sessao: {status: StatusSessaoEnum.STATUS_INICIADA}}});   
    }

    const itemAgendas = agendas.map((item) => { 
      return this.serviceVotation.getTotalVotes(item.id)
    });

    const agendasComVotos = await Promise.all(agendas.map(async agenda => {
      if (agenda.Sessao) {
        agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
        agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
      }      
      const quantidadeVotos = await this.serviceVotation.getTotalVotes(agenda.id);
      return { ...agenda, quantidadeVotos };
    }));

    return plainToInstance( ListAgendaDto, agendasComVotos);     

  }

  ////
  public async findAgenda(agendaId: number): Promise<ListAgendaDto>
  {
    const agenda = await this.repositoryAgenda.findById({ where: { id: agendaId } });
    if (agenda === null) {
      throw new NotFoundException('Agenda não foi encontrada')
    };
    return agenda;    
  }



}

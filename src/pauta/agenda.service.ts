import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusSessaoEnum } from '@prisma/client';
import { plainToInstance } from 'class-transformer';
import { TRepository } from '../repository/repository';
import { SessionService } from '../sessao/session.service';
import { VotationService } from '../votacao/votation.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { ListAgendaDto } from './dto/select-agenda.dto';

@Injectable()
export class AgendaService {
  
  private readonly repositoryCategory: TRepository;
  private readonly repositoryUser: TRepository;
  private readonly repositoryVotation: TRepository;

  ////
  constructor(private readonly repositoryAgenda: TRepository, private readonly serviceVotation: VotationService, private readonly serviceSession: SessionService) 
  {
    this.repositoryAgenda = new TRepository('pauta');
    this.repositoryCategory = new TRepository('categoria');
    this.repositoryUser = new TRepository('usuario');
    this.repositoryVotation = new TRepository('votacao');
  }

  ////
  public async createAgenda(userId: number, dataAgenda: CreateAgendaDto): Promise<CreateAgendaDto> 
  {
    const categoriaId: number = Number(dataAgenda.categoriaId);
    const category = await this.repositoryCategory.findById({ where: { id: categoriaId }});
    if (category === null) { throw new NotFoundException('Categoria não foi encontrada')};

    const user = await this.repositoryUser.findById({ where: { id: userId }});
    if (user === null) {
      throw new NotFoundException(`Usuário [${userId}]: Não foi encontrado'`);      
    } 

    // if (user.tipo === UserProfileEnum.PERFIL_COMUM) {
    //   throw new HttpException(`Usuário[${userId}]: Não tem perfil de Administrador`, HttpStatus.FORBIDDEN);
    // }    

    const {dataHoraInicio, dataHoraFim} = dataAgenda; 

    const session = await this.serviceSession.createSession({dataHoraInicio, dataHoraFim})

    const agenda: CreateAgendaDto = await this.repositoryAgenda.create( {data:
      {          
        titulo: dataAgenda.titulo, 
        descricao: dataAgenda.descricao,        
        categoria: { connect: { id: categoriaId}},   
        usuario:   { connect: { id: userId }},
        Sessao:   { connect: { id: session.id }},
      }});

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
      const quantidadeVotos = await this.serviceVotation.getResultVotation(agenda.id);
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
        return this.serviceVotation.getResultVotation(item.id)
      });

      const agendasComVotos = await Promise.all(agendas.map(async agenda => {
        const quantidadeVotos = await this.serviceVotation.getResultVotation(agenda.id);
        return { ...agenda, quantidadeVotos };
      }));

      return plainToInstance( ListAgendaDto, agendasComVotos);     

  }

  ////
  public async findAgendasByStatus(statusAgenda: string): Promise<ListAgendaDto[]> {
      
    const agendas: ListAgendaDto[] = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { Sessao: {status: statusAgenda}}});         
    
    const itemAgendas = agendas.map((item) => { 
      return this.serviceVotation.getResultVotation(item.id)
    });

    const agendasComVotos = await Promise.all(agendas.map(async agenda => {
      if (agenda.Sessao) {
        agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
        agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
      }      
      const {quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado} = await this.serviceVotation.getResultVotation(agenda.id);
      return { ...agenda, quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado };
    }));

    //return plainToInstance( ListAgendaDto, agendasComVotos);     
    return agendasComVotos;

  }


    ////
    public async findAgendasByCategoryAndStatus(categoryId: number, statusAgenda: string): Promise<ListAgendaDto[]> {
      
      const category = await this.repositoryCategory.findById({ where: { id: categoryId }});      
      if (category === null) {
            throw new NotFoundException('Categoria não foi encontrada')
        };
      
      const agendas: ListAgendaDto[] = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, 
                                                             where: { categoriaId: categoryId, 
                                                                      Sessao: {status: statusAgenda}}});   
    
      const itemAgendas = agendas.map((item) => { 
            return this.serviceVotation.getResultVotation(item.id)
      });
  
      const agendasComVotos = await Promise.all(agendas.map(async agenda => {
        if (agenda.Sessao) {
          agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
          agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
        }      
        const {quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado} = await this.serviceVotation.getResultVotation(agenda.id);
        return { ...agenda, quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado };
      }));
  
      return plainToInstance( ListAgendaDto, agendasComVotos);     
  
    }


























  ////
  public async findAgendasByStatus1(categoryId?: number, statusAgenda?: string): Promise<ListAgendaDto[]> {
      
    let agendas: ListAgendaDto[];

    if (categoryId) {
      const category = await this.repositoryCategory.findById({ where: { id: categoryId }});      
      if (category === null) {
          throw new NotFoundException('Categoria não foi encontrada')
      };
      agendas = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, 
                                                      where: { categoriaId: categoryId, 
                                                               Sessao: {status: statusAgenda}}});   
    } 
    else {      
      if (statusAgenda) {
        agendas = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { Sessao: {status: statusAgenda}}});         
      }
      else {
        agendas = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { Sessao: {status: StatusSessaoEnum.STATUS_INICIADA}}});         
      }
      
    }

    const itemAgendas = agendas.map((item) => { 
      return this.serviceVotation.getResultVotation(item.id)
    });

    const agendasComVotos = await Promise.all(agendas.map(async agenda => {
      if (agenda.Sessao) {
        agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
        agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
      }      
      const {quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado} = await this.serviceVotation.getResultVotation(agenda.id);
      return { ...agenda, quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado };
    }));

    return plainToInstance( ListAgendaDto, agendasComVotos);     

  }







  ////
  // public async findAgendasByFinishStatus(statusAgenda: string): Promise<ListAgendaDto[]> {
      
  //   const agendas: ListAgendaDto[] = await this.repositoryAgenda.findAll({ include: {categoria: true, Sessao: true, votacao: true}, where: { Sessao: {status: statusAgenda}}});         
    
  //   const itemAgendas = agendas.map((item) => { 
  //     return this.serviceVotation.getResultVotation(item.id)
  //   });

  //   const agendasComVotos = await Promise.all(agendas.map(async agenda => {
  //     if (agenda.Sessao) {
  //       agenda.Sessao.dataHoraInicio = new Date(agenda.Sessao.dataHoraInicio).toLocaleString();
  //       agenda.Sessao.dataHoraFim = new Date(agenda.Sessao.dataHoraFim).toLocaleString(); 
  //     }      
  //     const {quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado} = await this.serviceVotation.getResultVotation(agenda.id);
  //     return { ...agenda, quantidadeVotos, quantidadeVotosSim, quantidadeVotosNao, resultado };
  //   }));

  //   return agendasComVotos;     

  // }  

  ////
  public async findAgendaById(id: number): Promise<ListAgendaDto[]> {      
    const agenda: ListAgendaDto[] = await this.repositoryAgenda.findById({ where: { id }});      
      if (!agenda) {
          return [];
      };
    return plainToInstance(ListAgendaDto, agenda);
  }  

  ////
  public async findAgendaByName(nome: string): Promise<ListAgendaDto[]> {
  const agenda: ListAgendaDto[] = await this.repositoryAgenda.findAll({ where: { titulo: { contains: nome, mode: 'insensitive', } }});      
    if (!agenda) {
        return [];
    };
  return plainToInstance(ListAgendaDto, agenda);
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

  ////
  public async updateAgenda(id: number, dataAgenda: CreateAgendaDto) {
    
    const categoriaId: number = Number(dataAgenda.categoriaId);

    const agenda: ListAgendaDto = await this.repositoryAgenda.update( {      
        where: { id: Number(id) },
        data: {
          titulo: dataAgenda.titulo, 
          descricao: dataAgenda.descricao,
          categoriaId: categoriaId,          
        }}
    );    
    
    const {dataHoraInicio, dataHoraFim} = dataAgenda; 

    if(agenda.sessaoId) {
      const session = await this.serviceSession.updateSession(agenda.sessaoId, {dataHoraInicio, dataHoraFim})
    }

    return agenda;
  }  

  ////
  public async deleteAgenda(id: number) {
    const agenda = await this.repositoryAgenda.delete( {      
        where: { id: Number(id) }
      }
    );    
    return agenda;
  }    



}


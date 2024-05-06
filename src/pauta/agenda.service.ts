import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { UserPerfilEnum } from '../usuario/enums/user-perfil.enum';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { ListAgendaDto } from './dto/select-agenda.dto';

@Injectable()
export class AgendaService {
  
  private readonly repositoryCategory: TRepository;
  private readonly repositoryUser: TRepository;

  constructor(private readonly repositoryAgenda: TRepository) 
  {
    this.repositoryAgenda = new TRepository('pauta');
    this.repositoryCategory = new TRepository('categoria');
    this.repositoryUser = new TRepository('usuario');
  }

  ////
  public async createAgenda(userId: number, categoryId: number, dataAgenda: CreateAgendaDto): Promise<CreateAgendaDto> 
  {
    const category = await this.repositoryCategory.findById({ id: categoryId});
    if (category === null) { throw new NotFoundException('Categoria não foi encontrada')};

    const user = await this.repositoryUser.findById({ id: userId });
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
    const agendas: ListAgendaDto[] = await this.repositoryAgenda.findAll();
    if (agendas === null) {
      throw new NotFoundException('Nenhuma agenda foi encontrada')
    };          
    return agendas.map((agenda) => ({
      titulo: agenda.titulo,
      descricao: agenda.descricao,
      categoriaId: agenda.categoriaId,
    }));

  }

  ////
  public async findAgendasByCategory(categoryId: number): Promise<ListAgendaDto[]> {

     const category = await this.repositoryCategory.findById({ id: categoryId});      
      if (category === null) {
          throw new NotFoundException('Categoria não foi encontrada')
      };
  
      const agendas = this.repositoryAgenda.findById({ categoriaId: categoryId});
      if (agendas === null) {
        throw new NotFoundException('Agenda não foi encontrada')
    };      
   
     return agendas;      
  }

  ////
  public async findAgenda(agendaId: number): Promise<ListAgendaDto>
  {
    const agenda = await this.repositoryAgenda.findById({ id: agendaId});
    if (agenda === null) {
      throw new NotFoundException('Agenda não foi encontrada')
    };
    return agenda;    
  }



}

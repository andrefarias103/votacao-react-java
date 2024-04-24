import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CreatePautaDto } from './dto/create-pauta.dto';
import { ListPautaDto } from './dto/select-pauta.dto';

@Injectable()
export class PautaService {
  
  private readonly repositoryCategoria: TRepository;

  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('pauta');
    this.repositoryCategoria = new TRepository('categoria');
  }

  ////
  public async createAgenda(categoriaId: number, dadosPauta: CreatePautaDto): Promise<CreatePautaDto> {
    const category = await this.repositoryCategoria.findById({ id: categoriaId});
    if (category === null) { throw new NotFoundException('Categoria não foi encontrada')};

    const agenda: CreatePautaDto = await this.repository.create(
      { 
          data: { titulo: dadosPauta.titulo, descricao: dadosPauta.descricao,
          categoria: { connect: { id: category.id}}, 
        }, 
      });

    return agenda;
  }

  ////
  public async findAllAgendas(): Promise<ListPautaDto[]> {
    const agendas: ListPautaDto[] = await this.repository.findAll();
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
  public async findAgendasByCategory(categoriaId: number): Promise<ListPautaDto[]> {

      const category = await this.repositoryCategoria.findById({ id: categoriaId});      
      if (category === null) {
          throw new NotFoundException('Categoria não foi encontrada')
      };
  
      const agendas = this.repository.findById({ categoriaId: categoriaId});
      if (agendas === null) {
        throw new NotFoundException('Agenda não foi encontrada')
    };      
  
      console.log(agendas);
   
      return agendas;
  }

  // update(id: number, updatePautaDto: UpdatePautaDto) {
  //   return `This action updates a #${id} pauta`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pauta`;
  // }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ListCategoriaDto } from './dto/select-categoria.dto';

@Injectable()
export class CategoriaService {  
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('categoria');
  }

  public async createCategory(dadosCategoria: CreateCategoriaDto) {
    const category: CreateCategoriaDto = await this.repository.create( 
      { nome: dadosCategoria.nome, descricao: dadosCategoria.descricao },
    );    
    return category;
  }

  public async findAllCategories(): Promise<ListCategoriaDto[]> {
    const categories: ListCategoriaDto[] = await this.repository.findAll();
    if (categories === null) {
      throw new NotFoundException('Nenhuma categoria foi encontrada')
    };    
    return categories.map((categorie) => ({
      nome: categorie.nome,
      descricao: categorie.descricao,
    }));
  }

}

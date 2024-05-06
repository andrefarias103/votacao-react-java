import { Injectable, NotFoundException } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CreateCategoryDto } from './dto/create-categoria.dto';
import { ListCategoryDto } from './dto/select-categoria.dto';

@Injectable()
export class CategoryService {  
  constructor(private readonly repository: TRepository) {
    this.repository = new TRepository('categoria');
  }

  public async createCategory(dadosCategoria: CreateCategoryDto) {
    const category: CreateCategoryDto = await this.repository.create( 
      { nome: dadosCategoria.nome, descricao: dadosCategoria.descricao },
    );    
    return category;
  }

  public async findAllCategories(): Promise<ListCategoryDto[]> {
    const categories: ListCategoryDto[] = await this.repository.findAll();
    if (categories === null) {
      throw new NotFoundException('Nenhuma categoria foi encontrada')
    };    
    return categories.map((categorie) => ({
      id: categorie.id,
      nome: categorie.nome,
      descricao: categorie.descricao,
    }));
  }

}

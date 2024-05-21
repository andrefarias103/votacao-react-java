import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
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
      { data: { nome: dadosCategoria.nome, descricao: dadosCategoria.descricao }},
    );    
    return {
      categoria: category,
      messsage: 'Categoria criada com sucesso',
    };
  }

  public async findAllCategories(): Promise<ListCategoryDto[]> {    
    const categories: ListCategoryDto[] = await this.repository.findAll({});
    if (categories === null) {
      throw new NotFoundException('Nenhuma categoria foi encontrada')
    };    
    return categories.map((categorie) => ({
      id: categorie.id,
      nome: categorie.nome,
      descricao: categorie.descricao,
    }));
  }

    ////
    public async findCategoryById(id: number): Promise<ListCategoryDto[]> {      
      const category: ListCategoryDto[] = await this.repository.findById({ where: { id }});      
        if (!category) {
            return [];
        };
      return plainToInstance(ListCategoryDto, category);
    }  

  ////
  public async findCategoryByName(nome: string): Promise<ListCategoryDto[]> {
    const category: ListCategoryDto[] = await this.repository.findAll({ where: { nome: { contains: nome, mode: 'insensitive', } }});      
      if (!category) {
          return [];
      };
    return plainToInstance(ListCategoryDto, category);
  }  

  ////
  public async updateCategory(id: number, dataCategory: CreateCategoryDto) {
    const category: CreateCategoryDto = await this.repository.update( {      
        where: { id: Number(id) },
        data: {
          nome: dataCategory.nome, 
          descricao: dataCategory.descricao,
        }}
    );    
    return category;
  }  

  ////
  public async deleteCategory(id: number) {
    const category = await this.repository.delete( {      
        where: { id: Number(id) }
      }
    );    
    return category;
  }    

}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ListCategoriaDto } from './dto/select-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  public async createCategory(dadosCategoria: CreateCategoriaDto) {
    const newCategory: CreateCategoriaDto = await this.prisma.categoria.create({
      data: { nome: dadosCategoria.nome, descricao: dadosCategoria.descricao },
    });    
    return newCategory;
  }

  public async findAllCategories(): Promise<ListCategoriaDto[]> {
    const categories: ListCategoriaDto[] = await this.prisma.categoria.findMany();
    if (categories === null) {
      throw new NotFoundException('Nenhuma categoria foi encontrada')
    };    
    return categories.map((categorie) => ({
      nome: categorie.nome,
      descricao: categorie.descricao,
    }));
  }

}

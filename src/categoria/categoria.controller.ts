import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { ListCategoriaDto } from './dto/select-categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  async createCategory(@Body() dadosCategoria: CreateCategoriaDto) {
    return await this.categoriaService.createCategory(dadosCategoria);
  }

  @Get()
  async findAllCategories(): Promise<ListCategoriaDto[]> {
    return await this.categoriaService.findAllCategories();
  }

}

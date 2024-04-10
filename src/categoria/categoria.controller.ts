import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}

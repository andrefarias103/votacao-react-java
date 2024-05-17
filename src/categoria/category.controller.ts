import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-categoria.dto';
import { ListCategoryDto } from './dto/select-categoria.dto';

@Controller('categorias')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() dataCategory: CreateCategoryDto) {
    return await this.categoryService.createCategory(dataCategory);
  }

  @Get('/filtro_id/:id')
  async findCategoryById(@Param('id') id: number) {
    return await this.categoryService.findCategoryById(id);
  }

  @Get('/filtro_nome/:nome')
  async findCategoryByName(@Param('nome') nome: string) {
    return await this.categoryService.findCategoryByName(nome);
  }

  @Get()
  async findAllCategories(): Promise<ListCategoryDto[]> {
    return await this.categoryService.findAllCategories();
  }

  @Put(':id')
  async updateCategory(@Param('id') id: number, @Body() dataCategory: CreateCategoryDto) {
    return await this.categoryService.updateCategory(id, dataCategory);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.deleteCategory(id);
  }

  

}

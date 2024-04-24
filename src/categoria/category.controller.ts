import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Get()
  async findAllCategories(): Promise<ListCategoryDto[]> {
    return await this.categoryService.findAllCategories();
  }

}

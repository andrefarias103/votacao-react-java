import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from './../autenticacao/authentication.guard';
import { Roles } from './../autenticacao/roles';
import { RolesGuard } from './../autenticacao/roles.guard';
import { UserProfileEnum } from './../usuario/enums/user-profile.enum';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ListCategoryDto } from './dto/select-category.dto';


@Controller('categorias')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard,RolesGuard)
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
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard,RolesGuard)  
  async updateCategory(@Param('id') id: number, @Body() dataCategory: CreateCategoryDto) {
    return await this.categoryService.updateCategory(id, dataCategory);
  }

  @Delete(':id')
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard,RolesGuard)  
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.deleteCategory(id);
  }

  

}

import { Module } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, TRepository],
  exports: [CategoryService],
})
export class CategoryModule {}

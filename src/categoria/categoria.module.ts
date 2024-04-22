import { Module } from '@nestjs/common';
import { TRepository } from '../repository/repository';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';

@Module({
  imports: [],
  controllers: [CategoriaController],
  providers: [CategoriaService, TRepository],
  exports: [CategoriaService],
})
export class CategoriaModule {}

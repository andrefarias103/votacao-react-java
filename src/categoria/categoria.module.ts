import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriaController } from './categoria.controller';
import { TRepository } from './categoria.repository';
import { CategoriaService } from './categoria.service';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, TRepository],
  exports: [CategoriaService],
})
export class CategoriaModule {}

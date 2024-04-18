import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CpfValidator } from './validation/cpf.validator';

@Module({
  imports: [PrismaModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, CpfValidator],
  exports: [UsuarioService],
})
export class UsuarioModule {}

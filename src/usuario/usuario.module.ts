import { Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { CpfValidator } from './validation/cpf.validator';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, CpfValidator,TRepository],
  exports: [UsuarioService],
})
export class UsuarioModule {}

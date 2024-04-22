import { Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { SessaoController } from './sessao.controller';
import { SessaoService } from './sessao.service';

@Module({
  imports: [],
  controllers: [SessaoController],
  providers: [SessaoService, TRepository],
  exports: [SessaoService]
})
export class SessaoModule {}

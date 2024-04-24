import { Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { VotacaoController } from './votacao.controller';
import { VotacaoService } from './votacao.service';

@Module({
  imports: [],
  controllers: [VotacaoController],
  providers: [VotacaoService, TRepository],
})
export class VotacaoModule {}

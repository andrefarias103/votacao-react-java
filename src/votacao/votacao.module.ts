import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { VotacaoController } from './votacao.controller';
import { VotacaoService } from './votacao.service';

@Module({
  imports: [PrismaModule],
  controllers: [VotacaoController],
  providers: [VotacaoService],
})
export class VotacaoModule {}

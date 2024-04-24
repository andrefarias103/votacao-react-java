import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './categoria/category.module';
import { PautaModule } from './pauta/agenda.module';
import { SessaoModule } from './sessao/session.module';
import { UserModule } from './usuario/user.module';
import { VotacaoModule } from './votacao/votation.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot({ isGlobal: true }), CategoryModule, PautaModule, SessaoModule, VotacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

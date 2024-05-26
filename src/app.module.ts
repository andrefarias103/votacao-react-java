import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthenticationModule } from './autenticacao/authentication.module';
import { CategoryModule } from './categoria/category.module';
import { AgendaModule } from './pauta/agenda.module';
import { SessionExpirationTask } from './sessao/scheduler/session-task.scheduler';
import { SessionModule } from './sessao/session.module';
import { UserModule } from './usuario/user.module';
import { VotationModule } from './votacao/votation.module';


@Module({
  imports: [ScheduleModule.forRoot(),          
            ConfigModule.forRoot({ isGlobal: true }), 
            UserModule, 
            CategoryModule, 
            AgendaModule, 
            SessionModule, 
            VotationModule, AuthenticationModule],
  controllers: [],
  providers: [SessionExpirationTask],
  exports:[]
})
export class AppModule {}

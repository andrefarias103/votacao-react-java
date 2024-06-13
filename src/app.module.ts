import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { AgendaModule } from "./agenda/agenda.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { CategoryModule } from "./category/category.module";
import { SessionExpirationTask } from "./session/scheduler/session-task.scheduler";
import { SessionModule } from "./session/session.module";
import { UserModule } from "./user/user.module";
import { VotationModule } from "./votation/votation.module";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    CategoryModule,
    AgendaModule,
    SessionModule,
    VotationModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [SessionExpirationTask],
  exports: [],
})
export class AppModule {}

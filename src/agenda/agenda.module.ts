import { Module } from "@nestjs/common";
import { TRepository } from "src/repository/repository";
import { SessionService } from "src/session/session.service";
import { VotationController } from "src/votation/votation.controller";
import { VotationService } from "src/votation/votation.service";
import { AgendaController } from "./agenda.controller";
import { AgendaService } from "./agenda.service";

@Module({
  imports: [],
  controllers: [AgendaController, VotationController],
  providers: [AgendaService, VotationService, SessionService, TRepository],
  exports: [AgendaService],
})
export class AgendaModule {}

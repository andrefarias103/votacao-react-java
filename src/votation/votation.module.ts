import { Module } from "@nestjs/common";
import { TRepository } from "../repository/repository";
import { VotationController } from "./votation.controller";
import { VotationService } from "./votation.service";

@Module({
  imports: [],
  controllers: [VotationController],
  providers: [VotationService, TRepository],
})
export class VotationModule {}

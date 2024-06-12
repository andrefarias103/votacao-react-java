import { Module } from "@nestjs/common";
import { TRepository } from "src/repository/repository";
import { SessionController } from "./session.controller";
import { SessionService } from "./session.service";

@Module({
  imports: [],
  controllers: [SessionController],
  providers: [SessionService, TRepository],
  exports: [SessionService],
})
export class SessionModule {}

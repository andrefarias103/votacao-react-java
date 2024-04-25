import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { SessionService } from "../session.service";

@Injectable()
export class SessionExpirationTask {
    private readonly logger = new Logger(SessionExpirationTask.name);

    constructor(private readonly sessionService: SessionService) {}    

    @Cron(CronExpression.EVERY_5_SECONDS)
    handleCron() {
      this.logger.debug('Called when the current second is 5');
      this.sessionService.startAllSessions();
      this.sessionService.finishAllSessions();
    }

}
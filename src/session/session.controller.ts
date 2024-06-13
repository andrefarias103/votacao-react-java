import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { AuthenticationGuard } from "./../authentication/authentication.guard";
import { Roles } from "./../authentication/roles";
import { RolesGuard } from "./../authentication/roles.guard";
import { UserProfileEnum } from "./../user/enums/user-profile.enum";
import { CreateSessionDto } from "./dto/create-session.dto";
import { ListSessionDto } from "./dto/select-session.dto";
import { SessionService } from "./session.service";

@Controller("sessao")
export class SessionController {
  constructor(private readonly sessaoService: SessionService) {}

  @Post()
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async createSession(
    @Body() dataSession: CreateSessionDto,
  ): Promise<CreateSessionDto> {
    const session: CreateSessionDto =
      await this.sessaoService.createSession(dataSession);
    return session;
  }

  @Get()
  async findAllSessions(): Promise<ListSessionDto[]> {
    return await this.sessaoService.findAllSessions();
  }

  @Get("/filtro_pauta/:pautaId")
  async findSessionByAgenda(
    @Param("pautaId") agendaId: number,
  ): Promise<ListSessionDto[]> {
    return await this.sessaoService.findSessionByAgenda(agendaId);
  }

  @Get("/:sessaoId")
  async findSession(@Param("sessaoId") sessionId: number) {
    return await this.sessaoService.findSessionById(sessionId);
  }

  @Put(":id")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async updateSession(
    @Param("id") id: number,
    @Body() dataSession: CreateSessionDto,
  ) {
    return await this.sessaoService.updateSession(id, dataSession);
  }
}

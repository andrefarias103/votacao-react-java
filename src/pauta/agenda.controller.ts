import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { UserInfo } from "../utils/userInfo.utils";
import { AuthenticationGuard } from "./../autenticacao/authentication.guard";
import { Roles } from "./../autenticacao/roles";
import { RolesGuard } from "./../autenticacao/roles.guard";
import { UserProfileEnum } from "./../usuario/enums/user-profile.enum";
import { AgendaService } from "./agenda.service";
import { CreateAgendaDto } from "./dto/create-agenda.dto";
import { ListAgendaDto } from "./dto/select-agenda.dto";

@Controller("/pauta")
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async createAgenda(
    @UserInfo() userId: number,
    @Body() dataAgenda,
  ): Promise<CreateAgendaDto> {
    const agenda: CreateAgendaDto = await this.agendaService.createAgenda(
      userId,
      dataAgenda,
    );
    return agenda;
  }

  @Get("/status/:statusAgenda")
  async findAgendasByStatus(@Param("statusAgenda") statusAgenda: string) {
    return await this.agendaService.findAgendasByStatus(statusAgenda);
  }

  @Get("/status/:categoriaId/:statusAgenda")
  async findAgendasByCategoryAndStatus(
    @Param("categoriaId") categoryId: number,
    @Param("statusAgenda") statusAgenda: string,
  ) {
    return await this.agendaService.findAgendasByCategoryAndStatus(
      categoryId,
      statusAgenda,
    );
  }

  @Get()
  async findAllAgendas(): Promise<ListAgendaDto[]> {
    return await this.agendaService.findAllAgendas();
  }

  @Get("/:categoriaId")
  async findAgendasByCategory(@Param("categoriaId") categoryId: number) {
    return await this.agendaService.findAgendasByCategory(categoryId);
  }

  @Get("/:pautaId")
  async findAgenda(@Param("pautaId") agendaId: number) {
    return await this.agendaService.findAgenda(agendaId);
  }

  @Get("/filtro_id/:id")
  async findUserById(@Param("id") id: number) {
    return await this.agendaService.findAgendaById(id);
  }

  @Get("/filtro_nome/:nome")
  async findAgendaByName(@Param("nome") nome: string) {
    return await this.agendaService.findAgendaByName(nome);
  }

  @Put(":id")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async updateAgenda(@Param("id") id: number, @Body() dataAgenda) {
    return await this.agendaService.updateAgenda(id, dataAgenda);
  }

  @Delete(":id")
  @Roles(UserProfileEnum.PERFIL_ADMIN)
  @UseGuards(AuthenticationGuard, RolesGuard)
  async deleteAgenda(@Param("id") id: number) {
    return await this.agendaService.deleteAgenda(id);
  }
}

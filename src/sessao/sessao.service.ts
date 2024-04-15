import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async createSessao(pautaId: number, dadosSessao: CreateSessaoDto) {

    const agenda = await this.prisma.pauta.findUnique({ where: { id: pautaId}});
    if (agenda === null) { 
      throw new NotFoundException('Pauta não foi encontrada')
    };

    const session: CreateSessaoDto = await this.prisma.sessao.create({
      data: { dataHoraInicio: dadosSessao.dataHoraInicio, 
              dataHoraFim: dadosSessao.dataHoraFim, 
              status: dadosSessao.status, 
              pauta: { connect: { id: agenda?.id }}, },
    });    
    return session;
  }

  findAll() {
    return `This action returns all sessao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sessao`;
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    return `This action updates a #${id} sessao`;
  }

  remove(id: number) {
    return `This action removes a #${id} sessao`;
  }
}

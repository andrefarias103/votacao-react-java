import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVotacaoDto } from './dto/create-votacao.dto';
import { UpdateVotacaoDto } from './dto/update-votacao.dto';

@Injectable()
export class VotacaoService {
    constructor(private readonly prisma: PrismaService) {}

  async createVotacao(usuarioId: number, pautaId: number, dadosVotacao: CreateVotacaoDto): Promise<CreateVotacaoDto> {
    try {
      console.log(usuarioId);
      const user = await this.prisma.usuario.findUnique({ where: { id: usuarioId}});
      if (user === null) { 
        throw new NotFoundException('Usuário não foi encontrado')
      };
  
      const agenda = await this.prisma.pauta.findUnique({ where: { id: pautaId}});
      if (agenda === null) { 
        throw new NotFoundException('Pauta não foi encontrada')
      };
  
      const newVoting: CreateVotacaoDto = await this.prisma.votacao.create({
        data: {
          opcaoVotada: dadosVotacao.opcaoVotada,
          dataHoraVoto: new Date(Date.now()).toLocaleString(),
          usuarioId: usuarioId,
          pautaId: pautaId,
        },
      });

      return newVoting;
    }
    catch(error) {
      console.error('Erro ao executar votação:', error);
      throw error;      
    }
  }

  findAll() {
    return `This action returns all votacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votacao`;
  }

  update(id: number, updateVotacaoDto: UpdateVotacaoDto) {
    return `This action updates a #${id} votacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} votacao`;
  }
}

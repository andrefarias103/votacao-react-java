import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePautaDto } from './dto/create-pauta.dto';

@Injectable()
export class PautaService {
  constructor(private readonly prisma: PrismaService) {}

  public async createPauta(categoriaId: number, dadosPauta: CreatePautaDto) {

    const category = await this.prisma.categoria.findUnique({ where: { id: categoriaId}});
    if (category === null) { throw new NotFoundException('Categoria não foi encontrada')};

    const pauta = await this.prisma.pauta.create(
      { 
        data: { titulo: dadosPauta.titulo, descricao: dadosPauta.descricao,
          categoria: { connect: { id: category.id}}, 
        }, 
      });

    return pauta;
  }

  findAll() {
    return `This action returns all pauta`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} pauta`;
  // }

  // update(id: number, updatePautaDto: UpdatePautaDto) {
  //   return `This action updates a #${id} pauta`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} pauta`;
  // }
}

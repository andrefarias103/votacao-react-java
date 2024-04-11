import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../../prisma/prisma.module';
import { PrismaService } from '../../prisma/prisma.service';
import { PautaController } from '../pauta.controller';
import { PautaService } from '../pauta.service';

describe('PautaController', () => {
  let controller: PautaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [PautaController],
      providers: [PautaService, PrismaService],
    }).compile();

    controller = module.get<PautaController>(PautaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

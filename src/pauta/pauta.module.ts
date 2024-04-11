import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PautaController } from './pauta.controller';
import { PautaService } from './pauta.service';

@Module({
  imports: [PrismaModule],
  controllers: [PautaController],
  providers: [PautaService],
  exports: [PautaService],
})
export class PautaModule {}

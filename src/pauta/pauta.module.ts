import { Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { PautaController } from './pauta.controller';
import { PautaService } from './pauta.service';

@Module({
  imports: [],
  controllers: [PautaController],
  providers: [PautaService, TRepository],
  exports: [PautaService],
})
export class PautaModule {}

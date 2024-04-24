import { Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';

@Module({
  imports: [],
  controllers: [AgendaController],
  providers: [AgendaService, TRepository],
  exports: [AgendaService],
})
export class PautaModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CategoriaModule } from './categoria/categoria.module';
import { PautaModule } from './pauta/pauta.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, ConfigModule.forRoot({ isGlobal: true }), CategoriaModule, PautaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

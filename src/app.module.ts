import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [UsuarioModule, ConfigModule.forRoot({ isGlobal: true }), CategoriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Global, Module } from '@nestjs/common';
import { TRepository } from 'src/repository/repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CpfValidator } from './validation/cpf.validator';

@Global()
@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, CpfValidator,TRepository],
  exports: [UserService],
})
export class UserModule {}

import { Module } from '@nestjs/common';
import { UserCRUDService } from './crud.service';
import { UserCRUDController } from './crud.controller';
import { InMemoryRepository } from '@user/repository/in-memory-repository.implement';

@Module({
  controllers: [UserCRUDController],
  providers: [UserCRUDService, InMemoryRepository],
})
export class UserCRUDModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories';
import { ClientEntity, ProjectEntity, UserEntity } from './entities';

export const DatabaseEntities = [UserEntity, ProjectEntity, ClientEntity];

@Module({
  providers: [UserRepository],
  imports: [TypeOrmModule.forFeature([...DatabaseEntities])],
  exports: [UserRepository],
})
export class ApiPersistenceModule {}

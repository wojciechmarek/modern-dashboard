import { Module } from '@nestjs/common';
import { UserRepoProvider } from './user.provider';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities';

@Module({
  providers: [UserRepoProvider, UserRepository],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserRepository, UserRepoProvider] 
})
export class UserRepositoryModule {}

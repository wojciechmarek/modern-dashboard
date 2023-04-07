import { Module } from '@nestjs/common';
import { UserRepoProvider } from './user.provider';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../entities';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepoProvider, UserRepository],
  exports: [] 
})
export class UserRepositoryModule {}

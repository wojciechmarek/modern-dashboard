import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepositoryModule } from './repositories';
import { UserRepoProvider } from './repositories/user/user.provider';
import { UserRepository } from './repositories/user/user.repository';
import { UserEntity } from './entities';

const DatabaseEntities = [
  UserEntity
];

@Module({
  controllers: [],
  providers: [UserRepoProvider, UserRepository],
  imports: [
    UserRepositoryModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_CONNECTION_STRING,
      ssl: process.env.DATABASE_CONNECTION_SSL === 'true',
      authSource: 'admin',
      replicaSet: process.env.DATABASE_REPLICA_SET,
      useUnifiedTopology: true,
      database: process.env.DATABASE_NAME,
      //entities: [...DatabaseEntities],
      synchronize: true,
    }),

  ],
  exports: [],
})
export class ApiPersistenceModule {}

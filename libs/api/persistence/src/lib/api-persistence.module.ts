import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories';
import { UserEntity } from './entities';

@Module({
  controllers: [],
  providers: [UsersRepository],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_CONNECTION_STRING,
      ssl: process.env.DATABASE_CONNECTION_SSL === 'true',
      authSource: 'admin',
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      replicaSet: process.env.DATABASE_REPLICA_SET,
      useUnifiedTopology: true,
      database: process.env.DATABASE_NAME,
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  exports: [],
})
export class ApiPersistenceModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repositories';

@Module({
  controllers: [],
  providers: [UserRepository],
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mongodb',
    //   url: process.env.DATABASE_CONNECTION_STRING,
    //   ssl: process.env.DATABASE_CONNECTION_SSL === 'true',
    //   authSource: 'admin',
    //   replicaSet: process.env.DATABASE_REPLICA_SET,
    //   useUnifiedTopology: true,
    //   database: process.env.DATABASE_NAME,
    //   entities: [],
    //   synchronize: true,
    // }),

  ],
  exports: [UserRepository],
})
export class ApiPersistenceModule {}

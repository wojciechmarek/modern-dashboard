import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseEntities } from '@md/api/persistence';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DATABASE_CONNECTION_STRING,
      ssl: process.env.DATABASE_CONNECTION_SSL === 'true',
      // username: process.env.DATABASE_USERNAME,
      // password: process.env.DATABASE_PASSWORD,
      replicaSet: process.env.DATABASE_REPLICA_SET,
      useUnifiedTopology: true,
      authSource: 'admin',
      database: process.env.DATABASE_NAME,
      entities: [...DatabaseEntities],
      synchronize: true,
    }),
  ],
})
export class DatabaseConfigurationModule {}

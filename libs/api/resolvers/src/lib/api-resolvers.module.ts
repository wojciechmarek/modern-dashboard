import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './user';

@Module({
  controllers: [],
  providers: [
    UserResolver
  ],
  exports: [],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      //autoSchemaFile: join(process.cwd(), 'src/graphql-schema/schema.gql'),
    }),
  ],
})
export class ApiResolversModule {}

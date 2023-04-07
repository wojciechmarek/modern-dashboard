import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthResolver, UserResolver } from './resolvers';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  controllers: [],
  providers: [
    AuthResolver,
    UserResolver
  ],
  exports: [],
  imports: [
    CqrsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      
    }),
  ],
})
export class ApiResolversModule {}

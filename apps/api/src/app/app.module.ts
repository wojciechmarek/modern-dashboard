import { ApiControllersModule } from '@modern-dashboard/api/controllers';
import { ApiResolversModule } from '@modern-dashboard/api/resolvers';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiControllersModule,
    ApiResolversModule,
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    // }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { ApiControllersModule } from '@md/api/controllers';
import { ApiCqrsModule } from '@md/api/cqrs';
import { ApiResolversModule } from '@md/api/resolvers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiCqrsModule,
    ApiControllersModule,
    ApiResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

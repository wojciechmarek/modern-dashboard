import { ApiControllersModule } from '@md/api/controllers';
import { ApiCqrsModule } from '@md/api/cqrs';
import { ApiPersistenceModule } from '@md/api/persistence';
import { ApiResolversModule } from '@md/api/resolvers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiCqrsModule,
    ApiControllersModule,
    ApiPersistenceModule,
    ApiResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { ApiControllersModule } from '@md/api/endpoint/controllers';
import { ApiPersistenceModule } from '@md/api/persistence';
import { ApiResolversModule } from '@md/api/endpoint/resolvers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiControllersModule,
    ApiPersistenceModule,
    ApiResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

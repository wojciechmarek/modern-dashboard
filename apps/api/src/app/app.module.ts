import { ApiControllersModule } from '@md/api/endpoint/controllers';
import { ApiPersistenceModule } from '@md/api/persistence';
import { ApiResolversModule } from '@md/api/endpoint/resolvers';
import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@md/api/feature/auth';

const FeatureModules = [ApiAuthModule];

@Module({
  imports: [
    ApiControllersModule,
    ApiResolversModule,
    ApiPersistenceModule,
    ...FeatureModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

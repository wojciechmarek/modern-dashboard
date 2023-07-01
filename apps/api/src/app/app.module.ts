import { ApiControllersModule } from '@md/api/endpoint/controllers';
import { ApiPersistenceModule } from '@md/api/persistence';
import { ApiResolversModule } from '@md/api/endpoint/resolvers';
import { Module } from '@nestjs/common';
import { ApiAuthModule } from '@md/api/feature/auth';
import { DatabaseConfigurationModule } from './database-configuration.module';

const FeatureModules = [ApiAuthModule];

@Module({
  imports: [
    ApiControllersModule,
    ApiResolversModule,
    ApiPersistenceModule,
    DatabaseConfigurationModule,
    ...FeatureModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

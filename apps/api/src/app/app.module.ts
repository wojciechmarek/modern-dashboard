import { ApiControllersModule } from '@md/api/controllers';
import { ApiResolversModule } from '@md/api/resolvers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ApiControllersModule,
    ApiResolversModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

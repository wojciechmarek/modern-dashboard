import { ApiControllersModule } from '@modern-dashboard/api/controllers';
import { ApiResolversModule } from '@modern-dashboard/api/resolvers';
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

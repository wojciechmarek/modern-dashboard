import { Module } from '@nestjs/common';
import { HealthController } from './health';

const controllers = [HealthController];

@Module({
  controllers: [...controllers],
  providers: [],
  exports: [],
})
export class ApiControllersModule {}

import { Module } from '@nestjs/common';
import { HealthController } from './health';
import { TerminusModule } from '@nestjs/terminus';

const controllers = [HealthController];

@Module({
  controllers: [...controllers],
  providers: [],
  exports: [],
  imports: [TerminusModule],
})
export class ApiControllersModule {}

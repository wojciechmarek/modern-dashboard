import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

export const QueryHandlers = [];

export const CommandHandlers = [];

@Module({
  controllers: [],
  providers: [...QueryHandlers, ...CommandHandlers],
  exports: [],
  imports: [CqrsModule],
})
export class ApiDashboardModule {}

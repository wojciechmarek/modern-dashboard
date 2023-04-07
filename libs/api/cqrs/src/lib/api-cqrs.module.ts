import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LoginUserQueryHandler } from './queries/login-user.handler';

export const QueryHandlers = [
  LoginUserQueryHandler
];

@Module({
  controllers: [],
  providers: [...QueryHandlers],
  exports: [],
  imports: [CqrsModule],
})
export class ApiCqrsModule {}

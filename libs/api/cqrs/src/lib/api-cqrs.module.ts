import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiPersistenceModule } from '@md/api/persistence';
import { LoginCommandHandler, RegisterCommandHandler } from './auth';
import { ResetPasswordCommandHandler } from './auth/commands/reset-password';

export const QueryHandlers = [
  LoginCommandHandler,
];

export const CommandHandlers = [
  LoginCommandHandler,
  RegisterCommandHandler,
  ResetPasswordCommandHandler,
];

@Module({
  controllers: [],
  providers: [...QueryHandlers, ...CommandHandlers],
  exports: [],
  imports: [CqrsModule, ApiPersistenceModule],
})
export class ApiCqrsModule {}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ApiPersistenceModule } from '@md/api/persistence';
import {
  CheckEmailAvailableQueryHandler,
  LoginCommandHandler,
  LogoutCommandHandler,
  RegisterCommandHandler,
} from './auth';
import { ResetPasswordCommandHandler } from './auth/commands/reset-password';

export const QueryHandlers = [CheckEmailAvailableQueryHandler];

export const CommandHandlers = [
  LoginCommandHandler,
  RegisterCommandHandler,
  ResetPasswordCommandHandler,
  LogoutCommandHandler,
];

@Module({
  controllers: [],
  providers: [...QueryHandlers, ...CommandHandlers],
  exports: [],
  imports: [CqrsModule, ApiPersistenceModule],
})
export class ApiCqrsModule {}

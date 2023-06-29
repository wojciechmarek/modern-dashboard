import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import {
  CheckEmailAvailableQueryHandler,
  LoginCommandHandler,
  LogoutCommandHandler,
  RegisterCommandHandler,
} from './dashboard';
import { ResetPasswordCommandHandler } from './dashboard/commands/reset-password';

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
  imports: [CqrsModule],
})
export class ApidashboardModule {}

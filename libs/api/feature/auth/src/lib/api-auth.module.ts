import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { CheckEmailAvailableQueryHandler } from './queries';
import {
  LoginCommandHandler,
  LogoutCommandHandler,
  RegisterCommandHandler,
  ResetPasswordCommandHandler,
} from './commands';
import { ApiPersistenceModule } from '@md/api/persistence';

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
  imports: [ApiPersistenceModule],
})
export class ApiAuthModule {}

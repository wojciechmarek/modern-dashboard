import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { LoginUserQueryHandler } from './queries/login-user.handler';
import { ApiPersistenceModule } from '@md/api/persistence';

export const QueryHandlers = [
  LoginUserQueryHandler
];

@Module({
  controllers: [],
  providers: [...QueryHandlers],
  exports: [],
  imports: [CqrsModule, ApiPersistenceModule],
})
export class ApiCqrsModule {}

import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.repository-module';

@Module({
  controllers: [],
  providers: [],
  imports: [UserRepositoryModule],
  exports: [],
})
export class ApiPersistenceModule {}

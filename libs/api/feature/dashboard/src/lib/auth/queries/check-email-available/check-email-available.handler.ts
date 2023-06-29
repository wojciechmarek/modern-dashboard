import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CheckEmailAvailableQuery } from './check-email-available.query';
import { UserRepository } from '@md/api/persistence';
import { Inject } from '@nestjs/common';

@QueryHandler(CheckEmailAvailableQuery)
export class CheckEmailAvailableQueryHandler
  implements IQueryHandler<CheckEmailAvailableQuery>
{
  @Inject(UserRepository)
  private readonly userRepository: UserRepository;

  execute(payload: CheckEmailAvailableQuery): Promise<boolean> {
    const { data } = payload;

    console.log('CheckEmailAvailableQueryHandler...:', data);

    return Promise.resolve(true);
  }
}

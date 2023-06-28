import { Query, Resolver } from '@nestjs/graphql';
import { UserInfoOutput } from './models';

@Resolver()
export class UserResolver {
  @Query(() => UserInfoOutput)
  getUserInfo(): Promise<UserInfoOutput> {
    return Promise.resolve({
      id: '123',
      email: 'asdasd',
    });
  }
}

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput, LoginOutput } from '../../models';
import { QueryBus } from '@nestjs/cqrs';
import {LoginUserQuery} from '@md/api/cqrs'

@Resolver()
export class AuthResolver {
  constructor(private queryBus: QueryBus) {}

  @Mutation(() => LoginOutput)
  async login(@Args('data') data: LoginInput): Promise<LoginOutput> {

    const result =  await this.queryBus.execute(new LoginUserQuery(data.email, data.password));

    console.log('result:', result);

    const returnData = new LoginOutput();
    returnData.accessToken = result;
    returnData.refreshToken = result;

    return returnData;
  }
}

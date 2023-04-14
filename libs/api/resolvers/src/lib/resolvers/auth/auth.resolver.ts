import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  LoginInput,
  LoginOutput,
  RefreshSessionInput,
  RefreshSessionOutput,
  RegisterInput,
  RegisterOutput,
  ResetPasswordInput,
  ResetPasswordOutput,
} from '../../models';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { LoginUserQuery } from '@md/api/cqrs';
import { LoginDto } from '@md/common/models';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Mutation(() => RegisterOutput)
  async register(@Args('data') data: RegisterInput): Promise<RegisterOutput> {
    const result = await this.queryBus.execute(
      new LoginUserQuery(data as LoginDto)
    );

    console.log('result:', result);

    const returnData = new LoginOutput();
    returnData.accessToken = result;
    returnData.refreshToken = result;

    return returnData;
  }

  @Query(() => LoginOutput)
  async login(@Args('data') data: LoginInput): Promise<LoginOutput> {
    const result = await this.queryBus.execute(
      new LoginUserQuery(data as LoginDto)
    );

    console.log('result:', result);

    const returnData = new LoginOutput();
    returnData.accessToken = result;
    returnData.refreshToken = result;

    return returnData;
  }

  @Mutation()
  async logout(): Promise<void> {
    console.log('logout');
  }

  @Query(() => RefreshSessionInput)
  async refreshSession(
    @Args('data') data: RefreshSessionInput
  ): Promise<RefreshSessionOutput> {
    console.log('refreshSession');
    return new RefreshSessionOutput();
  }

  @Mutation(() => ResetPasswordInput)
  async resetPassword(
    @Args('data') data: ResetPasswordInput
  ): Promise<ResetPasswordOutput> {
    console.log('resetPassword');
    return new RefreshSessionOutput();
  }
}

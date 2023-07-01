import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import {
  EmailAvailableInput,
  EmailAvailableOutput,
  LoginInput,
  LoginOutput,
  RegisterInput,
  ResetPasswordInput,
} from './models';
import { SuccessOutput } from '../../common-models';
import { EmailAvailableDto, LoginDto, RegisterDto, ResetPasswordDto } from '@md/common/models';
import { CheckEmailAvailableQuery, LoginCommand, LogoutCommand, RegisterCommand, ResetPasswordCommand } from '@md/api/feature/auth';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Mutation(() => LoginOutput)
  async login(@Args('data') data: LoginInput): Promise<LoginOutput> {
    console.log('login', data);
    
    return this.commandBus.execute(new LoginCommand(data as LoginDto));
  }

  @Mutation(() => SuccessOutput)
  async register(@Args('data') data: RegisterInput) {
    this.commandBus.execute(new RegisterCommand(data as RegisterDto));

    return new SuccessOutput(true);
  }

  @Mutation(() => SuccessOutput)
  async resetPassword(@Args('data') data: ResetPasswordInput) {
    this.commandBus.execute(new ResetPasswordCommand(data as ResetPasswordDto));

    return new SuccessOutput(true);
  }

  @Mutation(() => SuccessOutput)
  async logout() {
    this.commandBus.execute(new LogoutCommand());

    return new SuccessOutput(true);
  }

  @Query(() => EmailAvailableOutput)
  async checkEmailAvailable(
    @Args('data') data: EmailAvailableInput
  ): Promise<EmailAvailableOutput> {
    const result = await this.queryBus.execute(
      new CheckEmailAvailableQuery(data as EmailAvailableDto)
    );

    const output = new EmailAvailableOutput();
    output.isEmailAvailable = result;

    return output;
  }

  // @Query(() => )
  // async refreshSession(
  //   @Args('data') data: RefreshSessionInput
  // ): Promise<RefreshSessionOutput> {
  //   console.log('refreshSession');
  //   return new RefreshSessionOutput();
  // }
}

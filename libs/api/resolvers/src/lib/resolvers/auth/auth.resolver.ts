import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { LoginDto, RegisterDto, ResetPasswordDto } from '@md/common/models';
import {
  LoginInput,
  LoginOutput,
  RegisterInput,
  ResetPasswordInput,
} from './models';
import {
  LoginCommand,
  LogoutCommand,
  RegisterCommand,
  ResetPasswordCommand,
} from '@md/api/cqrs';
import { SuccessOutput } from '../../common-models';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus
  ) {}

  @Mutation(() => LoginOutput)
  async login(@Args('data') data: LoginInput): Promise<LoginOutput> {
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

  // @Query(() => )
  // async refreshSession(
  //   @Args('data') data: RefreshSessionInput
  // ): Promise<RefreshSessionOutput> {
  //   console.log('refreshSession');
  //   return new RefreshSessionOutput();
  // }
}

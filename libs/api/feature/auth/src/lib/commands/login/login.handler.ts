import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from './login.command';
import { UsersRepository } from '@md/api/persistence';
import { Inject } from '@nestjs/common';
import { TokenDto } from '@md/common/models';

@CommandHandler(LoginCommand)
export class LoginCommandHandler implements ICommandHandler<LoginCommand> {
  @Inject(UsersRepository)
  private readonly userRepository: UsersRepository;

  execute(payload: LoginCommand): Promise<TokenDto> {
    const { data } = payload;

    console.log('LoginCommandHandler...:', data);

    const response = new TokenDto('accessToken', 'refreshToken');

    this.userRepository.create(data.email);

    return Promise.resolve(response);
  }
}

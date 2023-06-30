import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LogoutCommand } from './logout.command';
import { UsersRepository } from '@md/api/persistence';
import { Inject } from '@nestjs/common';

@CommandHandler(LogoutCommand)
export class LogoutCommandHandler implements ICommandHandler<LogoutCommand> {
  // @Inject(UserRepository)
  // private readonly userRepository: UserRepository;

  execute(): Promise<void> {
    console.log('LogoutCommandHandler...:');

    return Promise.resolve();
  }
}

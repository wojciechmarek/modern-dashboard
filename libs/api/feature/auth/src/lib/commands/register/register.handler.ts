import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterCommand } from './register.command';
import { UsersRepository } from '@md/api/persistence';
import { Inject } from '@nestjs/common';

@CommandHandler(RegisterCommand)
export class RegisterCommandHandler
  implements ICommandHandler<RegisterCommand>
{
  // @Inject(UserRepository)
  // private readonly userRepository: UserRepository;

  execute(payload: RegisterCommand): Promise<void> {
    const { data } = payload;

    console.log('RegisterCommandHandler...:', data);

    return Promise.resolve();
  }
}

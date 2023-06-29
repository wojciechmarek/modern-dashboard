import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ResetPasswordCommand } from './reset-password.command';
import { UserRepository } from '@md/api/persistence';
import { Inject } from '@nestjs/common';

@CommandHandler(ResetPasswordCommand)
export class ResetPasswordCommandHandler
  implements ICommandHandler<ResetPasswordCommand>
{
  // @Inject(UserRepository)
  // private readonly userRepository: UserRepository;

  execute(payload: ResetPasswordCommand): Promise<void> {
    const { data } = payload;

    console.log('ResetPasswordCommandHandler...:', data);

    return Promise.resolve();
  }
}

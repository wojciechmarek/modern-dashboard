import { ResetPasswordDto } from '@md/common/models';

export class ResetPasswordCommand {
  constructor(public data: ResetPasswordDto) {}
}

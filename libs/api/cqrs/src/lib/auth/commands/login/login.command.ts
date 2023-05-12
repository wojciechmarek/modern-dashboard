import { LoginDto } from "@md/common/models";

export class LoginCommand {
  constructor(
    public data: LoginDto
  ) { }
}
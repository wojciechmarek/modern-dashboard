import { RegisterDto } from "@md/common/models";

export class RegisterCommand {
  constructor(
    public data: RegisterDto
  ) { }
}
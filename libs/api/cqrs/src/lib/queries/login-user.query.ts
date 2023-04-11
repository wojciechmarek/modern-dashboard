import { LoginDto } from "@md/common/models";

export class LoginUserQuery {
  constructor(
    public data: LoginDto
  ) { }
}
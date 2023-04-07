export class LoginUserQuery {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) { }
}
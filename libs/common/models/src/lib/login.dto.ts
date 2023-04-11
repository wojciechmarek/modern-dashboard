export class LoginDto {
  constructor(
    public email: string,
    public password: string,
    public isRememberMeChecked: boolean
  ) {}
}

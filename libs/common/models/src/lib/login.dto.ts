export class LoginDto {
  email: string;
  password: string;
  isRememberMeChecked: boolean;

  constructor(email: string, password: string, isRememberMeChecked: boolean) {
    this.email = email;
    this.password = password;
    this.isRememberMeChecked = isRememberMeChecked;
  }
}
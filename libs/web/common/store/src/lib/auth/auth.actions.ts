import {
  EmailAvailableDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
  TokenDto,
} from '@md/common/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginAction = createActionGroup({
  source: 'Login',
  events: {
    Load: props<LoginDto>(),
    Success: props<TokenDto>(),
    Failure: props<{ error: string }>(),
  },
});

export const LogoutAction = createActionGroup({
  source: 'Logout',
  events: {
    Load: emptyProps(),
    Success: emptyProps(),
    Failure: props<{ error: string | Error }>(),
  },
});

export const RegisterAction = createActionGroup({
  source: 'Register',
  events: {
    Load: props<RegisterDto>(),
    Success: emptyProps(),
    Failure: props<{ error: string | Error }>(),
  },
});

export const ResetPasswordAction = createActionGroup({
  source: 'Reset Password',
  events: {
    Load: props<ResetPasswordDto>(),
    Success: emptyProps(),
    Failure: props<{ error: string | Error }>(),
  },
});

export const CheckEmailAvailableAction = createActionGroup({
  source: 'Email Available Check',
  events: {
    Load: props<EmailAvailableDto>(),
    Success: props<{ isAvailable: boolean }>(),
    Failure: props<{ error: string | Error }>(),
  },
});

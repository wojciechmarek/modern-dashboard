import { TokenDto } from '@md/common/models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginAction = createActionGroup({
  source: 'Login',
  events: {
    'Load': props<{ email: string; password: string, isRememberMeChecked: boolean }>(),
    'Success': props<TokenDto>(),
    'Failure': props<{ error: string }>(),
  },
})

export const LogoutAction = createActionGroup({
  source: 'Logout',
  events: {
    'Load': emptyProps(),
    'Success': emptyProps(),
    'Failure': props<{ error: string | Error}>(),
  },
})

export const RegisterAction = createActionGroup({
  source: 'Register',
  events: {
    'Load': props<{ email: string; password: string }>(),
    'Success': props<{ authToken: string, refreshToken: string }>(),
    'Failure': props<{ error: string | Error }>(),
  },
})

export const EmailAvailableCheckAction = createActionGroup({
  source: 'Email Available Check',
  events: {
    'Load': props<{ email: string }>(),
    'Success': props<{ isAvailable: boolean }>(),
    'Failure': props<{ error: string | Error }>(),
  }
})


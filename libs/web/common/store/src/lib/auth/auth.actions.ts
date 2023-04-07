import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const LoginActions = createActionGroup({
  source: 'Login',
  events: {
    'Action': props<{ email: string; password: string, isRememberMeChecked: boolean }>(),
    'Success': props<{ authToken: string, refreshToken: string }>(),
    'Failure': props<{ error: string }>(),
  },
})

export const LogoutActions = createActionGroup({
  source: 'Logout',
  events: {
    'Action': emptyProps(),
    'Success': emptyProps(),
    'Failure': props<{ error: string }>(),
  },
})

export const RegisterActions = createActionGroup({
  source: 'Register',
  events: {
    'Check If Email Is Available': props<{ email: string }>(),
    'Check If Email Is Available Success': props<{ isAvailable: boolean }>(),
    'Check If Email Is Available Failure': props<{ error: string }>(),
    'Action': props<{ email: string; password: string }>(),
    'Success': props<{ authToken: string, refreshToken: string }>(),
    'Failure': props<{ error: string }>(),
  },
})


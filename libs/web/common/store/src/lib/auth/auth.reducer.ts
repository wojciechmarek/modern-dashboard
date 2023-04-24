import { createReducer, on } from '@ngrx/store';
import { LoginAction } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  authToken: string;
  accessToken: string;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  authToken: '',
  accessToken: '',
};

export const authReducer = createReducer(
  initialAuthState,
  on(LoginAction.load, (state) => ({ ...state, isLoading: true })),
  on(LoginAction.success, (state, action) => {
    // TODO: fix this
    const { login: tokens } = action as any;

    return {
      ...state,
      isLoading: false,
      isLoggedIn: true,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  })
  //   on(loginWithCredentialsFailureAction, (state) => ({
  //     ...state,
  //     isLoading: false,
  //     isLoggedIn: false,
  //   }))
);

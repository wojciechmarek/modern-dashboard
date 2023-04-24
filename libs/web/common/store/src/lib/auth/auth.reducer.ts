import { createReducer, on } from '@ngrx/store';
import { LoginAction } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  authToken: string;
  accessToken: string;
  permissions: string[];
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  authToken: '',
  accessToken: '',
  permissions: [],
};

export const authReducer = createReducer(
  initialAuthState,
  on(LoginAction.load, (state) => ({ ...state, isLoading: true })),
  on(LoginAction.success, (state, action) => ({
    ...state,
    isLoading: false,
    isLoggedIn: true,
    accessToken: action.login.accessToken,
    refreshToken: action.login.refreshToken,
  }))
  //   on(loginWithCredentialsFailureAction, (state) => ({
  //     ...state,
  //     isLoading: false,
  //     isLoggedIn: false,
  //   }))
);

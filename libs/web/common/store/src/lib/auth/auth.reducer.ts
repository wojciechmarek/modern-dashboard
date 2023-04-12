import { createReducer, on } from '@ngrx/store';
import {
  LoginAction
} from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  authToken: string;
  refreshToken: string;
  permissions: string[];
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  authToken: '',
  refreshToken: '',
  permissions: [],
};

export const authReducer = createReducer(
  initialAuthState,
//   on(loginWithCredentialsAction, (state) => ({ ...state, isLoading: true })),
//   on(loginWithCredentialsSuccessAction, (state, action) => ({
//     ...state,
//     isLoading: false,
//     isLoggedIn: true,
//     authToken: action.authToken,
//     refreshToken: action.refreshToken,
//   })),
//   on(loginWithCredentialsFailureAction, (state) => ({
//     ...state,
//     isLoading: false,
//     isLoggedIn: false,
//   }))
);

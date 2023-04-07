import { createReducer, on } from '@ngrx/store';
import {
  LoginActions
} from './auth.actions';

interface AuthState {
  isLoading: boolean;
  isLoggedIn: boolean;
  authToken: string;
  refreshToken: string;
}

export const initialAuthState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  authToken: '',
  refreshToken: '',
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

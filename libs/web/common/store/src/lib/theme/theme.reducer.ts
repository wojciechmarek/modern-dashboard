import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from './theme.actions';

export interface ThemeState {
  value: string;
}

export const initialThemeState: ThemeState = {
  value: 'light',
};

export const themeReducer = createReducer(
  initialThemeState,
  on(ThemeActions.changeToLight, (state) => ({ ...state, value: 'light' })),
  on(ThemeActions.changeToDark, (state) => ({ ...state, value: 'dark' }))
);

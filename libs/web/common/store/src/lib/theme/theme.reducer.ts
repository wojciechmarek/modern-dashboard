import { createReducer, on } from '@ngrx/store';
import { ThemeActions } from './theme.actions';

interface ThemeState {
  theme: string
}

export const initialThemeState: ThemeState = {
  theme: 'light'
};

export const themeReducer = createReducer(
  initialThemeState,
  on(ThemeActions.changeToLight, (state) => ({ ...state, theme: 'light' })),
  on(ThemeActions.changeToDark, (state) => ({ ...state, theme: 'dark' }))
);
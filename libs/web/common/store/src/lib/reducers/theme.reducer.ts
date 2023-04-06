import { createReducer, on } from '@ngrx/store';
import { changeToLightThemeAction, changeToDarkThemeAction } from '../actions';

interface ThemeState {
  theme: string
}

export const initialThemeState: ThemeState = {
  theme: 'light'
};

export const themeReducer = createReducer(
  initialThemeState,
  on(changeToLightThemeAction, (state) => ({ ...state, theme: 'light' })),
  on(changeToDarkThemeAction, (state) => ({ ...state, theme: 'dark' }))
);
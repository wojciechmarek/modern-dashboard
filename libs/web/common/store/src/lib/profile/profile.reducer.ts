import { createReducer, on } from '@ngrx/store';
import { LanguageActions, ThemeActions } from './profile.actions';

export interface ProfileState {
  language: string;
  theme: string;
}

export const initialProfileState: ProfileState = {
  language: 'en',
  theme: 'light',
};

export const profileReducer = createReducer(
  initialProfileState,

  on(LanguageActions.changeToEnglish, (state) => ({ ...state, language: 'en' })),
  on(LanguageActions.changeToPolish, (state) => ({ ...state, language: 'pl' })),

  on(ThemeActions.changeToLight, (state) => ({ ...state, theme: 'light' })),
  on(ThemeActions.changeToDark, (state) => ({ ...state, theme: 'dark' }))
);

import { createReducer, on } from '@ngrx/store';
import { LanguageActions, ThemeActions } from './profile.actions';
import { Language, Theme } from '@md/common/enums';

export interface ProfileState {
  language: Language
  theme: Theme;
  permissions: string[];
  email: string;
}

export const initialProfileState: ProfileState = {
  language: Language.English,
  theme: Theme.Light,
  permissions: [],
  email: '',
};

export const profileReducer = createReducer(
  initialProfileState,

  on(LanguageActions.changeToEnglish, (state) => ({ ...state, language: Language.English})),
  on(LanguageActions.changeToPolish, (state) => ({ ...state, language: Language.Polish })),

  on(ThemeActions.changeToLight, (state) => ({ ...state, theme: Theme.Light })),
  on(ThemeActions.changeToDark, (state) => ({ ...state, theme: Theme.Dark }))
);

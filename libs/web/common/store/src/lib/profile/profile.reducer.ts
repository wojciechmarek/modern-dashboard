import { createReducer, on } from '@ngrx/store';
import {  LanguageAction, ThemeAction } from './profile.actions';
import { Language, Theme } from '@md/common/enums';

export interface ProfileState {
  language: Language;
  theme: Theme;
  permissions: string[];
  email: string;
}

export const initialProfileState: ProfileState = {
  language: Language.English,
  theme: Theme.System,
  permissions: [],
  email: '',
};

export const profileReducer = createReducer(
  initialProfileState,

  on(LanguageAction, (state, { language }) => ({
    ...state,
    language,
  })),

  on(ThemeAction, (state, { theme }) => {
    if (theme === Theme.System) {
      theme = isDarkMode() ? Theme.Dark : Theme.Light;
    }

    return {
      ...state,
      theme,
    };
  })
);

const isDarkMode = () =>
  globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches ?? false;

import { createReducer, on } from '@ngrx/store';
import { LanguageActions } from './language.actions';

export interface LanguageState {
  value: string;
}

export const initialThemeState: LanguageState = {
  value: 'en',
};

export const languageReducer = createReducer(
  initialThemeState,
  on(LanguageActions.changeToEnglish, (state) => ({ ...state, value: 'en' })),
  on(LanguageActions.changeToPolish, (state) => ({ ...state, value: 'pl' }))
);

import { Language, Theme } from '@md/common/enums';
import { createAction, props } from '@ngrx/store';

export const LanguageAction = createAction(
  '[Language] Change',
  props<{ language: Language }>()
)

export const ThemeAction = createAction(
  '[Theme] Change',
  props<{ theme: Theme }>()
)



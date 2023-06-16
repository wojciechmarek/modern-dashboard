import { Theme } from '@md/common/enums';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    'Change To English': emptyProps(),
    'Change To Polish': emptyProps(),
  },
})

export const ThemeAction = createAction(
  '[Theme] Change',
  props<{ theme: Theme }>()
)



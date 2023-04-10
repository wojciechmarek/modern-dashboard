import { createActionGroup, emptyProps } from '@ngrx/store';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    'Change To English': emptyProps(),
    'Change To Polish': emptyProps(),
  },
})
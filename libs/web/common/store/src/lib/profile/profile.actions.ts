import { createActionGroup, emptyProps } from '@ngrx/store';

export const LanguageActions = createActionGroup({
  source: 'Language',
  events: {
    'Change To English': emptyProps(),
    'Change To Polish': emptyProps(),
  },
})

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Change To Light': emptyProps(),
    'Change To Dark': emptyProps(),
  },
})



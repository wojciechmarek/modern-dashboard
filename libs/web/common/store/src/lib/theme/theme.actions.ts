import { createActionGroup, emptyProps } from '@ngrx/store';

export const ThemeActions = createActionGroup({
  source: 'Theme',
  events: {
    'Change To Light': emptyProps(),
    'Change To Dark': emptyProps(),
  },
})
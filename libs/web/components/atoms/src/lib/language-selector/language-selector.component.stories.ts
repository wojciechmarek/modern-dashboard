

import { Meta } from '@storybook/angular';
import { LanguageSelectorComponent } from './language-selector.component';

export default {
  title: 'LanguageSelectorComponent',
  component: LanguageSelectorComponent,
} as Meta<LanguageSelectorComponent>;

export const Primary = {
  render: (args: LanguageSelectorComponent) => ({
    props: args,
  }),
  args: {
    text: 'Sample text',
  },
};

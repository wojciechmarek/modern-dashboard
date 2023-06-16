import { Meta } from '@storybook/angular';
import { ThemeSelectorComponent } from './theme-selector.component';

export default {
  title: 'ThemeSelectorComponent',
  component: ThemeSelectorComponent,
} as Meta<ThemeSelectorComponent>;

export const Primary = {
  render: (args: ThemeSelectorComponent) => ({
    props: args,
  }),
  args: {
    text: 'Sample text',
  },
};

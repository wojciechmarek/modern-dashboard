import { Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
  title: 'Select',
  component: SelectComponent,
} as Meta<SelectComponent>;

export const Primary = {
  render: (args: SelectComponent) => ({
    props: args,
  }),
  args: {
    text: 'Sample text',
  },
};

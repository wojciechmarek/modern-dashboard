import { Meta } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

export default {
  title: 'Text Input',
  component: TextInputComponent,
} as Meta<TextInputComponent>;

export const Primary = {
  render: (args: TextInputComponent) => ({
    props: args,
  }),
  args: {
    label: '',
    placeholder: '',
    type: 'text',
    value: '',
    name: '',
    errorMessage: '',
  },
};

import { Meta } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Checkbox',
  component: CheckboxComponent,
} as Meta<CheckboxComponent>;

export const Primary = {
  render: (args: CheckboxComponent) => ({
    props: args,
  }),
  args: {
    label: '',
    value: false,
    name: '',
  },
};

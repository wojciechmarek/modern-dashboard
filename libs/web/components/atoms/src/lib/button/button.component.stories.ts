import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: '',
    type: 'button',
    color: 'flat',
    disabled: false,
    isTextLeftAligned: false,
  },
};

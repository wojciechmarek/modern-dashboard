import { Meta } from '@storybook/angular';
import { SwitchComponent } from './switch.component';

export default {
  title: 'Switch',
  component: SwitchComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'handleClick',  },
  },
} as Meta<SwitchComponent>;

export const Primary = {
  render: (args: SwitchComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

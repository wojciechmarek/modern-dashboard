import { Meta } from '@storybook/angular';
import { FlatLinkComponent } from './flat-link.component';

export default {
  title: 'FlatLinkComponent',
  component: FlatLinkComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'handleClick',  },
  },
} as Meta<FlatLinkComponent>;

export const Primary = {
  render: (args: FlatLinkComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

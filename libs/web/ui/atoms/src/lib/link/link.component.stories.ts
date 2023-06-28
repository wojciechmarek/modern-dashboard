import { Meta } from '@storybook/angular';
import { LinkComponent } from './link.component';

export default {
  title: 'Link',
  component: LinkComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'handleClick' },
  },
} as Meta<LinkComponent>;

export const Primary = {
  render: (args: LinkComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

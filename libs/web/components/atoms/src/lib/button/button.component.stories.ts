import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'clicked' },
  },
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

export const Info = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    color: 'info',
  },
};

export const Warning = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    color: 'warning',
  },
};

export const Danger = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    color: 'danger',
  },
};

export const Success = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    color: 'success',
  },
};

export const isDisabled = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

export const TextLeftAligned = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    ...Primary.args,
    isTextLeftAligned: true,
  },
};

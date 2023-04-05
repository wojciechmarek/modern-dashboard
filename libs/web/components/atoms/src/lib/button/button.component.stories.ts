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
    label: 'Press me',
    type: 'button',
    color: 'info',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

export const Warning = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'warning',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

export const Danger = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'danger',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

export const Success = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'success',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

export const isDisabled = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'flat',
    isDisabled: true,
    isTextLeftAligned: false,
  },
};

export const TextLeftAligned = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'info',
    isDisabled: false,
    isTextLeftAligned: true,
  },
};

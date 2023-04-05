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
    label: 'Press me',
    type: 'button',
    color: 'flat',
    disabled: false,
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
    disabled: false,
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
    disabled: false,
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
    disabled: false,
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
    disabled: false,
    isTextLeftAligned: false,
  },
};

export const Disabled = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    color: 'flat',
    disabled: true,
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
    disabled: false,
    isTextLeftAligned: true,
  },
};




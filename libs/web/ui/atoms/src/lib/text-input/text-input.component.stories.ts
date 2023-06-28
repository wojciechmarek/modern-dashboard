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
    label: 'E-mail:',
    placeholder: 'E-mail',
    type: 'text',
    value: '',
    name: '',
    errorMessage: '',
  },
};

export const Password = {
  render: (args: TextInputComponent) => ({
    props: args,
  }),
  args: {
    label: 'Password:',
    placeholder: 'Password',
    type: 'password',
  },
};

export const WithValue = {
  render: (args: TextInputComponent) => ({
    props: args,
  }),
  args: {
    label: 'E-mail:',
    placeholder: 'E-mail',
    type: 'text',
    value: 'sample.email@google.com',
    name: '',
    errorMessage: '',
  },
};

export const WithError = {
  render: (args: TextInputComponent) => ({
    props: args,
  }),
  args: {
    label: 'E-mail:',
    placeholder: 'E-mail',
    type: 'text',
    value: 'sample.email@google.com',
    name: '',
    errorMessage: 'This email is already in use',
  },
};

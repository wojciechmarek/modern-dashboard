import { Meta } from '@storybook/angular';
import { RegisterFormComponent } from './register-form.component';

export default {
  title: 'Login Form',
  component: RegisterFormComponent,
} as Meta<RegisterFormComponent>;

export const Primary = {
  render: (args: RegisterFormComponent) => ({
    props: args,
  }),
  args: {},
};

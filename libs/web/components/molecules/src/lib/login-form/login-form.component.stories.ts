import { Meta } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';

export default {
  title: 'LoginFormComponent',
  component: LoginFormComponent,
} as Meta<LoginFormComponent>;

export const Primary = {
  render: (args: LoginFormComponent) => ({
    props: args,
  }),
  args: {},
};

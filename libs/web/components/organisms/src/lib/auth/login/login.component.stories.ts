import { Meta } from '@storybook/angular';
import { LoginComponent } from './login.component';

export default {
  title: 'Login',
  component: LoginComponent,
} as Meta<LoginComponent>;

export const Primary = {
  render: (args: LoginComponent) => ({
    props: args,
  }),
  args: {},
};

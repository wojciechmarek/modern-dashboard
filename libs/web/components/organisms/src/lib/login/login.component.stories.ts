import { Meta } from '@storybook/angular';
import { LoginComponent } from './login.component';

export default {
  title: 'LoginComponent',
  component: LoginComponent,
} as Meta<LoginComponent>;

export const Primary = {
  render: (args: LoginComponent) => ({
    props: args,
  }),
  args: {},
};

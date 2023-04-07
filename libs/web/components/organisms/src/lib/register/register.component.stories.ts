import { Meta } from '@storybook/angular';
import { RegisterComponent } from './register.component';

export default {
  title: 'Register',
  component: RegisterComponent,
} as Meta<RegisterComponent>;

export const Primary = {
  render: (args: RegisterComponent) => ({
    props: args,
  }),
  args: {},
};

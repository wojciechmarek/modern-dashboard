import { Meta } from '@storybook/angular';
import { ResetPasswordComponent } from './reset-password.component';

export default {
  title: 'ResetPasswordComponent',
  component: ResetPasswordComponent,
} as Meta<ResetPasswordComponent>;

export const Primary = {
  render: (args: ResetPasswordComponent) => ({
    props: args,
  }),
  args: {},
};

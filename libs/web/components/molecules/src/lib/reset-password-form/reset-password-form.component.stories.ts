import { Meta } from '@storybook/angular';
import { ResetPasswordFormComponent } from './reset-password-form.component';

export default {
  title: 'Reset Password Form',
  component: ResetPasswordFormComponent,
} as Meta<ResetPasswordFormComponent>;

export const Primary = {
  render: (args: ResetPasswordFormComponent) => ({
    props: args,
  }),
  args: {},
};

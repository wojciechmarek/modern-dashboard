import { Meta, moduleMetadata } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';
import { WebComponentsAtomsModule } from '@md/web/components/atoms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export default {
  title: 'Login Form',
  component: LoginFormComponent,
  decorators: [
    moduleMetadata({
      imports: [WebComponentsAtomsModule, ReactiveFormsModule, RouterModule.forRoot([])],
    })
  ],
  argTypes: {
    handleLoginSubmit: { action: 'handleLoginSubmit' },
  },
} as Meta<LoginFormComponent>;

export const Primary = {
  render: (args: LoginFormComponent) => ({
    props: args,
  }),
  args: {

  },

};

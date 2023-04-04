import { Meta } from '@storybook/angular';
import { NavbarComponent } from './navbar.component';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
} as Meta<NavbarComponent>;

export const Primary = {
  render: (args: NavbarComponent) => ({
    props: args,
  }),
  args: {},
};

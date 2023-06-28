import { Meta } from '@storybook/angular';
import { NavbarUserManagerComponent } from './navbar-user-manager.component';

export default {
  title: 'Navbar User Manager',
  component: NavbarUserManagerComponent,
} as Meta<NavbarUserManagerComponent>;

export const Primary = {
  render: (args: NavbarUserManagerComponent) => ({
    props: args,
  }),
  args: {},
};

import { Meta } from '@storybook/angular';
import { NavbarMenuLinksComponent } from './navbar-menu-links.component';

export default {
  title: 'Navbar Menu Links',
  component: NavbarMenuLinksComponent,
} as Meta<NavbarMenuLinksComponent>;

export const Primary = {
  render: (args: NavbarMenuLinksComponent) => ({
    props: args,
  }),
  args: {},
};

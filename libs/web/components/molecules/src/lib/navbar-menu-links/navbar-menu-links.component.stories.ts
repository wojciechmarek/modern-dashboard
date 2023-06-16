import { Meta } from '@storybook/angular';
import { NavbarMenuLinksComponent } from './navbar-menu-links.component';

export default {
  title: 'NavbarMenuLinksComponent',
  component: NavbarMenuLinksComponent,
} as Meta<NavbarMenuLinksComponent>;

export const Primary = {
  render: (args: NavbarMenuLinksComponent) => ({
    props: args,
  }),
  args: {},
};

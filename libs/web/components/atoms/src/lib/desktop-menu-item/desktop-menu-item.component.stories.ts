import { Meta } from '@storybook/angular';
import { DesktopMenuItemComponent } from './desktop-menu-item.component';

export default {
  title: 'Desktop Menu Item',
  component: DesktopMenuItemComponent,
} as Meta<DesktopMenuItemComponent>;

export const Primary = {
  render: (args: DesktopMenuItemComponent) => ({
    props: args,
  }),
  args: {
    path: '/home',
    title: 'Home',
  },
};

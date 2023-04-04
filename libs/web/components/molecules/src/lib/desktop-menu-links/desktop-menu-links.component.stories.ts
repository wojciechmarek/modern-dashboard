import { Meta } from '@storybook/angular';
import { DesktopMenuLinksComponent } from './desktop-menu-links.component';

export default {
  title: 'Desktop Menu Links',
  component: DesktopMenuLinksComponent,
} as Meta<DesktopMenuLinksComponent>;

export const Primary = {
  render: (args: DesktopMenuLinksComponent) => ({
    props: args,
  }),
  args: {},
};

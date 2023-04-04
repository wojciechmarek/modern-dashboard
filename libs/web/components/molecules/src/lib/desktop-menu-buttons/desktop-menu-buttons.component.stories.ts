import { Meta } from '@storybook/angular';
import { DesktopMenuButtonsComponent } from './desktop-menu-buttons.component';

export default {
  title: 'Desktop Menu Buttons',
  component: DesktopMenuButtonsComponent,
} as Meta<DesktopMenuButtonsComponent>;

export const Primary = {
  render: (args: DesktopMenuButtonsComponent) => ({
    props: args,
  }),
  args: {},
};

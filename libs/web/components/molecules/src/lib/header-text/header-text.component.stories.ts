import { Meta } from '@storybook/angular';
import { HeaderTextComponent } from './header-text.component';

export default {
  title: 'Header Text',
  component: HeaderTextComponent,
} as Meta<HeaderTextComponent>;

export const Primary = {
  render: (args: HeaderTextComponent) => ({
    props: args,
  }),
  args: {},
};

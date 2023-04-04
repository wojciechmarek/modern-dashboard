import { Meta } from '@storybook/angular';
import { BrandLogoComponent } from './brand-logo.component';

export default {
  title: 'Brand Logo',
  component: BrandLogoComponent,
} as Meta<BrandLogoComponent>;

export const Primary = {
  render: (args: BrandLogoComponent) => ({
    props: args,
  }),
  args: {},
};

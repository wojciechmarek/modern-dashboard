import { Meta } from '@storybook/angular';
import { HorizontalLineComponent } from './horizontal-line.component';

export default {
  title: 'Horizontal Line',
  component: HorizontalLineComponent,
} as Meta<HorizontalLineComponent>;

export const Primary = {
  render: (args: HorizontalLineComponent) => ({
    props: args,
  }),
  args: { },
};

export const WithText = {
  render: (args: HorizontalLineComponent) => ({
    props: args,
  }),
  args: { 
    text: 'Some text',
  },
};

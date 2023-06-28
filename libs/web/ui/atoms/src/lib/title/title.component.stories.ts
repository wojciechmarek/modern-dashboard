import { Meta } from '@storybook/angular';
import { TitleComponent } from './title.component';

export default {
  title: 'Title',
  component: TitleComponent,
} as Meta<TitleComponent>;

export const Primary = {
  render: (args: TitleComponent) => ({
    props: args,
  }),
  args: {
    text: 'Sample text',
  },
};

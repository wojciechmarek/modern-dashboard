import { Meta } from '@storybook/angular';
import { SearchComponent } from './search.component';

export default {
  title: 'SearchComponent',
  component: SearchComponent,
} as Meta<SearchComponent>;

export const Primary = {
  render: (args: SearchComponent) => ({
    props: args,
  }),
  args: {},
};

import { Meta } from '@storybook/angular';
import { SearchComponent } from './search.component';

export default {
  title: 'Search',
  component: SearchComponent,
} as Meta<SearchComponent>;

export const Primary = {
  render: (args: SearchComponent) => ({
    props: args,
  }),
  args: {},
};

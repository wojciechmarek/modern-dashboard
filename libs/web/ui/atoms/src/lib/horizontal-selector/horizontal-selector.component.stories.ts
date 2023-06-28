import { Meta } from '@storybook/angular';
import { HorizontalSelectorComponent } from './horizontal-selector.component';

export default {
  title: 'Horizontal Selector',
  component: HorizontalSelectorComponent,
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'handleClick' },
  },
} as Meta<HorizontalSelectorComponent>;

export const Primary = {
  render: (args: HorizontalSelectorComponent) => ({
    props: args,
  }),
  args: {
    items: [
      {
        iconUrl: 'https://picsum.photos/200/300',
        id: '1',
      },
      {
        iconUrl: 'https://picsum.photos/200/300',
        id: '2',
      },
    ],
  },
};

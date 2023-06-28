import { Meta, componentWrapperDecorator } from '@storybook/angular';
import { BreadcrumbComponent } from './breadcrumb.component';

export default {
  title: 'Button',
  component: BreadcrumbComponent,
  decorators: [
    componentWrapperDecorator(
      story => `<div style="height: 3em">${story}</div>`
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['success', 'info', 'danger', 'warning', 'flat'],
    },
    handleClick: { action: 'handleClick' },
  },
} as Meta<BreadcrumbComponent>;

export const Primary = {
  render: (args: BreadcrumbComponent) => ({
    props: args,
  }),
  args: {
    label: 'Press me',
    type: 'button',
    isDisabled: false,
    isTextLeftAligned: false,
  },
};

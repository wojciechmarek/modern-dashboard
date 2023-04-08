import { Meta, moduleMetadata } from '@storybook/angular';
import { HeaderTextComponent } from './header-text.component';
import { WebComponentsAtomsModule } from '@md/web/components/atoms';

export default {
  title: 'Header Text',
  component: HeaderTextComponent,
  decorators: [
    moduleMetadata({
      imports: [WebComponentsAtomsModule],
    })
  ],
} as Meta<HeaderTextComponent>;

export const Primary = {
  render: (args: HeaderTextComponent) => ({
    props: args,
  }),
  args: {
    header: 'Header',
    subHeaderText: 'Sub Header',
  },
};


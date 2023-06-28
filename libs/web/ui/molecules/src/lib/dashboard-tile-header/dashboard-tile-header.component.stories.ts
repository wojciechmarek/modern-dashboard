import { Meta, moduleMetadata } from '@storybook/angular';
import { DashboardTileHeaderComponent } from './dashboard-tile-header.component';
import { WebComponentsAtomsModule } from '@md/web/ui/atoms';

export default {
  title: 'Dashboard Tile Header',
  component: DashboardTileHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [WebComponentsAtomsModule],
    })
  ],
} as Meta<DashboardTileHeaderComponent>;

export const Primary = {
  render: (args: DashboardTileHeaderComponent) => ({
    props: args,
  }),
  args: {
    header: 'Header',
    subHeaderText: 'Sub Header',
  },
};


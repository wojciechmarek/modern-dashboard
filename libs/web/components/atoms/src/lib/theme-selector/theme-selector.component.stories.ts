import { Meta } from '@storybook/angular';
import { ThemeSelectorComponent } from './theme-selector.component';

const themes = [
  {
    id: "light",
    name: 'Toggle to light theme',
    style: "linear-gradient(110deg, #eaeaea 50%, #bababa 50%)",
  },
  {
    id: "dark",
    name: 'Toggle to dark theme',
    style: "linear-gradient(110deg, #252525 50%, #151515 50%)",
  },
  {
    id: "red",
    name: 'Toggle to red theme',
    style: "linear-gradient(110deg, #e13636 50%, #bc2626 50%)",
  },
  {
    id: "green",
    name: 'Toggle to green theme',
    style: "linear-gradient(110deg, #37d149 50%, #219d30 50%)",
  },
  {
    id: "blue",
    name: 'Toggle to blue theme',
    style: "linear-gradient(110deg, #355ec5 50%, #234497 50%)",
  },
]

export default {
  title: 'Theme Selector',
  argTypes: {
    themeChange: { action: 'handleClick', themes: themes, selectedTheme: themes[0]  },
  },
  component: ThemeSelectorComponent,
} as Meta<ThemeSelectorComponent>;

export const Primary = {
  render: (args: ThemeSelectorComponent) => ({
    props: args,
  })
};

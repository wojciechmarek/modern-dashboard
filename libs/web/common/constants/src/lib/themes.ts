import { Theme } from "@md/common/enums";

export const themes = [
  {
    id: Theme.Light,
    name: 'Toggle to light theme',
    style: "linear-gradient(110deg, #eaeaea 50%, #bababa 50%)",
  },
  {
    id: Theme.Dark,
    name: 'Toggle to dark theme',
    style: "linear-gradient(110deg, #252525 50%, #151515 50%)",
  },
  {
    id: Theme.Red,
    name: 'Toggle to red theme',
    style: "linear-gradient(110deg, #e13636 50%, #bc2626 50%)",
  },
  {
    id: Theme.Green,
    name: 'Toggle to green theme',
    style: "linear-gradient(110deg, #37d149 50%, #219d30 50%)",
  },
  {
    id: Theme.Blue,
    name: 'Toggle to blue theme',
    style: "linear-gradient(110deg, #355ec5 50%, #234497 50%)",
  },
  {
    id: Theme.System,
    name: 'Toggle to system theme',
    style: "linear-gradient(110deg, #eaeaea 50%, #151515 50%)",
  },
];
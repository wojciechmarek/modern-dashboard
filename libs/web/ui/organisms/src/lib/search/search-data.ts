export type SearchData = {
  id: string;
  title: string;
  description: string;
  keyboardKeys: string;
  url: string;
};

export const demoData: SearchData[] = [
  {
    id: '1',
    title: 'SpaceX - flight guidance system',
    description: 'Support project',
    keyboardKeys: '⌃⇧1',
    url: 'project/1',
  },
  {
    id: '2',
    title: 'Tesla - autonomous driving',
    description: 'Research project',
    keyboardKeys: '⌃⇧2',
    url: 'project/2',
  },
  {
    id: '3',
    title: 'Google - natural language processing',
    description: 'Machine learning project',
    keyboardKeys: '⌃⇧3',
    url: 'project/3',
  },
  {
    id: '4',
    title: 'Microsoft - cloud computing',
    description: 'Infrastructure project',
    keyboardKeys: '⌃⇧4',
    url: 'project/4',
  },
  {
    id: '5',
    title: 'Amazon - e-commerce platform',
    description: 'Business project',
    keyboardKeys: '⌃⇧5',
    url: 'project/5',
  },
  {
    id: '6',
    title: 'John Doe',
    description: 'Software Engineer',
    keyboardKeys: '⌃⇧6',
    url: 'profile/1',
  },
  {
    id: '7',
    title: 'Jane Smith',
    description: 'Product Manager',
    keyboardKeys: '⌃⇧7',
    url: 'profile/2',
  },
  {
    id: '8',
    title: 'Alex Johnson',
    description: 'UI/UX Designer',
    keyboardKeys: '⌃⇧8',
    url: 'profile/3',
  },
  {
    id: '9',
    title: 'Apple - consumer electronics',
    description: 'Technology company',
    keyboardKeys: '⌃⇧9',
    url: 'project/6',
  },
  {
    id: '10',
    title: 'Facebook - social media',
    description: 'Social networking company',
    keyboardKeys: '⌃⇧0',
    url: 'project/7',
  },
  {
    id: '11',
    title: 'Netflix - streaming service',
    description: 'Entertainment company',
    keyboardKeys: '⌃⇧-',
    url: 'project/8',
  },
  {
    id: '12',
    title: 'Uber - ride-sharing',
    description: 'Transportation network company',
    keyboardKeys: '⌃⇧=',
    url: 'project/9',
  },
];

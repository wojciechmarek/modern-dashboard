import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  core: { builder: '@storybook/builder-webpack5' },
  framework: '@storybook/angular',
  stories: [
    {
      titlePrefix: 'Atoms',
      directory: '../../atoms/',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      titlePrefix: 'Molecules',
      directory: '../../molecules/',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
    {
      titlePrefix: 'Organisms',
      directory: '../../organisms/',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-dark-mode-toggle',
    'storybook-dark-mode',
    '@storybook/addon-a11y',
    '@etchteam/storybook-addon-css-variables-theme'
  ],
};

module.exports = config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs

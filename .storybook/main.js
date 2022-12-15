const path = require('path');

module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../**/*.stories.mdx',
    '../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/preset-scss',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader?url=false', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },

      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,

        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../'),
        },
      },
    };
  },
};

// configure(loadStories, module);

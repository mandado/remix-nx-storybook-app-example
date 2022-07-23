const rootMain = require('../../../.storybook/main');
const path = require('path');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons, '@nrwl/react/plugins/storybook'],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          // options: {
          //   postcssOptions: {
          //     plugins: [require("tailwindcss"), require("autoprefixer")],
          //   },
          // },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  }
};

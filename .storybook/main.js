const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions"
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  staticDirs: ["../public"],

  docs: {
    autodocs: false
  }
}

export default config

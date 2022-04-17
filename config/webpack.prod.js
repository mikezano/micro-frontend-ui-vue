const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/helloVue/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'vue',
      filename: 'remoteEntry.js',
      exposes: {
        './VueApp': './src/bootstrap',
      },
      remotes: {
        styles: `styles@${domain}/Styles/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

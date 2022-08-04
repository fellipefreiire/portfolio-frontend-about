const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/about/latest/',
  },
  devtool: 'source-map',
  plugins: [
    new ModuleFederationPlugin({
      name: 'about',
      filename: 'remoteEntry.js',
      exposes: {
        './AboutApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}

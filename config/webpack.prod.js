const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

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
        './Section': './src/components/Section/index.tsx',
      },
      remotes: {
        home: `home@${domain}/home/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}

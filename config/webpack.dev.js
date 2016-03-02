const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const fromBase = p => path.resolve(__dirname, p)

config.entry = {
  app: [
    'webpack-hot-middleware/client',
    './bin/dev-client',
    './src/index.jsx'
  ]
}
config.devtool = 'cheap-module-eval-source-map'
config.output.publicPath = '/'
config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  }),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: fromBase('../src/index.html'),
    inject: true
  })
])

module.exports = config

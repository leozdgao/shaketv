const webpack = require('webpack')
const path = require('path')
const config = require('./webpack.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const browsers = JSON.stringify({ browsers: [ "IOS >= 7", "Android >= 4" ] })
const cssLoader = `css?importLoaders=1&sourceMap!autoprefixer?${browsers}`
const fromBase = p => path.resolve(__dirname, p)

config.entry = {
  app: './src/index.jsx'
}
config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[id].[chunkhash].js'
config.devtool = 'source-map'
config.module.loaders = [
  {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', `${cssLoader}!sass`),
    exclude: /node_modules/
  },
  {
    test: /\.css/,
    loader: ExtractTextPlugin.extract('style', cssLoader),
    exclude: /node_modules/
  }
]
config.plugins = (config.plugins || []).concat([
  // http://vuejs.github.io/vue-loader/workflow/production.html
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  // extract css into its own file
  new ExtractTextPlugin('[name].[contenthash].css'),
  // generate dist index.html with correct asset hash for caching.
  // you can customize output by editing /src/index.html
  // see https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: fromBase('../src/index.html'),
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    }
  })
])

module.exports = config

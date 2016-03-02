const webpack = require('webpack')
const path = require('path')

const browsers = JSON.stringify({ browsers: [ "IOS >= 7", "Android >= 4" ] })
const cssLoader = `style!css?importLoaders=1&sourceMap!autoprefixer?${browsers}`
const fromBase = p => path.resolve(__dirname, p)

module.exports = {
  output: {
    path: fromBase('../dist/static'),
    publicPath: '/static/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: `${cssLoader}!sass`,
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        loader: cssLoader,
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    shaketv: 'shaketv'
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "../src/sass")
    ]
  }
}

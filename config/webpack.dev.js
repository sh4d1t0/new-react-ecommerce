const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader'],
}

const ruleForJavascript = {
  test: /\.[jt]sx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: ['react-refresh/babel'],
      },
    },
  ],
}

const rules = [ruleForJavascript, ruleForStyles]

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: 'development',
  module: { rules },
  devServer: {
    open: true, // open browser
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      }, // overlay with errors and/or warnings
    },
    historyApiFallback: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'eval-source-map',
}

module.exports = merge(common, devConfig)

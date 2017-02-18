const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const outputDir = 'build';
const config = {
  resolve: {
    'extensions': ['.ts', '.tsx', '.js', '.jsx'],
  },
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js'
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Budgeteer'
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        'test': /\.jsx?$/,
        'exclude': /node_modules/,
        'loader': 'babel-loader',
        'enforce': 'pre'
      },
      {
        'test': /\.tsx?$/,
        'exclude': /node_modules/,
        'loader': 'awesome-typescript-loader',
        'enforce': 'pre'
      }
    ]
  }
};

module.exports = config;
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

const outputDir = 'build';
const config = {
  
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Budgeteer'
    }),
    new CheckerPlugin(),
  ],
  module: {
    rules: [
      {
        "test": /\.jsx?$/,
        "exclude": /node_modules/,
        "loader": "babel-loader"
      },
      {
        "test": /\.tsx?$/,
        "exclude": /node_modules/,
        "loader": "awesome-typescript-loader"
      }
    ]
  }
};

module.exports = config;
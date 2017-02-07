const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputDir = 'build';
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Budgeteer'
    })
  ],
  module: {
    rules: [
      {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel-loader"
      }
    ]
  }
};

module.exports = config;
const path = require('path');
var webpack = require('webpack');

const outputDir = 'build';
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: 'frontend.bundle.js'
  },
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
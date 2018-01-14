const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/romanNumeral.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
    ],
  },
};

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.tsx',
    pendulum: './src/01-single-pendulum/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?/i,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['main'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/01-single-pendulum/index.html',
      chunks: ['pendulum'],
      filename: '01-single-pendulum/index.html',
    }),
  ],
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};

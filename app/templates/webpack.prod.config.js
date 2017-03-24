// @flow

import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import common from './webpack.config';

export default merge(common, {
  entry: './src/app/main.js',

  devtool: '#source-map',

  plugins: [
    new ExtractTextPlugin({ filename: '[name]---[hash].css' }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ]
});

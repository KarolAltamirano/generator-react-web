// @flow

import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import common from './webpack.config';

export default merge(common, {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './src/entry/main.js'
    ],

    devtool: '#cheap-module-source-map',

    plugins: [
        new ExtractTextPlugin({ disable: true }),
        new webpack.HotModuleReplacementPlugin()
    ]
});

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
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('development') }
        }),
        new ExtractTextPlugin('[name]---[hash].css', { disable: true }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

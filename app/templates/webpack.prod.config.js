import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import common from './webpack.config';

export default merge(common, {
    entry: './src/entry/main.js',

    devtool: '#source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new ExtractTextPlugin('[name]---[hash].css', { disable: false }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]
});

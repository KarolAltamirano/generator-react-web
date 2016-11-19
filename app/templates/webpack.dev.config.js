import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.js';

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
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});

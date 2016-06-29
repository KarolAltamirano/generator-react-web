import extend from 'extend';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';

var config = extend(true, {}, webpackConfig, {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/entry/main.js'
    ],

    devtool: '#cheap-module-source-map',

    module: {
        loaders: webpackConfig.module.loaders.concat([
            { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' }
        ])
    },

    plugins: webpackConfig.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('development') }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ])
});

export default config;

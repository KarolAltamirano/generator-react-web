import extend from 'extend';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';

var config = extend(true, {}, webpackConfig, {
    entry: './src/entry/main.js',

    plugins: webpackConfig.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ])
});

export default config;

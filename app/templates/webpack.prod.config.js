import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.config.js';

export default merge(common, {
    entry: './src/entry/main.js',

    devtool: '#source-map',

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]
});

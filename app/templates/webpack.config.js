// @flow

import path from 'path';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import config from './config.json';

// hide deprecation warrings
(process: any).noDeprecation = true;

// set path to scss shared file
const sassResources = path.resolve(__dirname, 'src', 'app', 'style', 'shared', 'shared.scss');

// set postcss plugins
const postcssPlugins = () => [assets, autoprefixer({ browsers: config.autoprefixer })];

// webpack configuration
export default {
    output: {
        path: path.resolve(__dirname, config.buildDir),
        publicPath: '/',
        filename: '[name]---[hash].js',
        sourceMapFilename: 'maps/[file].map'
    },

    plugins: [
        new ProgressBarPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new HtmlWebpackPlugin({ template: 'src/index.ejs', favicon: 'src/favicon.ico', inject: false }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
        })
    ],

    resolve: {
        alias: {
            'createjs-preloadjs$': 'createjs-preloadjs/lib/preloadjs-0.6.2.combined.js',
            modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
    },

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, enforce: 'pre', use: ['eslint-loader'] },
            { test: /\.html$/, exclude: /node_modules/, enforce: 'pre', use: ['htmlhint-loader'] },
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.html$/, use: ['html-loader'] },
            {
                test: /\.(eot|woff(2)?|ttf|svg|png|jp(e)?g|mp3|mp4|webm|ogg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'static/[path][name]---[hash].[ext]' }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1 }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { plugins: postcssPlugins }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src', 'app')
                ],
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[path][name]__[local]---[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: { plugins: postcssPlugins }
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: { resources: sassResources }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src', 'assets', 'scssSprite'),
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'static/[path][name]---[hash].css' }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { plugins: postcssPlugins }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'sass-resources-loader',
                        options: { resources: sassResources }
                    }
                ]
            },
            {
                test: /\.modernizrrc$/, use: ['modernizr-loader', 'json-loader']
            },
            {
                test: /createjs-preloadjs/,
                use: ['imports-loader?this=>global', 'exports-loader?window.createjs']
            },
            {
                test: /gsap/, use: ['exports-loader?window']
            }
        ]
    }
};

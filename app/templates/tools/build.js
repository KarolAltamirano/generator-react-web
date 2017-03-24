// @flow

import webpack from 'webpack';
import clean from './common/clean';
import webpackProdConfig from '../webpack.prod.config';

/**
 * Build application
 *
 * @return {Promise}
 */
function bundle(): Promise<void> {
    return new Promise((resolve: Function, reject: Function) => {
        webpack(webpackProdConfig, (err: any, stats: any) => {
            if (err) {
                reject(err);
                return;
            }

            console.log(stats.toString({ chunks: false, colors: true }));

            resolve();
        });
    });
}

export default function build(): Promise<void> {
    return clean().then(bundle);
}

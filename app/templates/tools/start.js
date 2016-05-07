import webpack from 'webpack';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import clean from './common/clean';
import webpackDevConfig from '../webpack.dev.config';
import config from '../config.json';

/**
 * Start development server with build
 *
 * @return {Promise}
 */
function serve() {
    var compiler = webpack(webpackDevConfig),
        bs = browserSync.create();

    bs.init({
        open: false,
        server: {
            baseDir: `./${config.buildDir}`,
            middleware: [
                historyApiFallback(),
                webpackDevMiddleware(compiler, {
                    publicPath: webpackDevConfig.output.publicPath,
                    stats: { chunks: false, colors: true }
                }),
                webpackHotMiddleware(compiler)
            ]
        },
        files: [
            './src/index.ejs'
        ]
    });

    return Promise.resolve({ skip: true });
}

export default function start() {
    return clean().then(serve);
}

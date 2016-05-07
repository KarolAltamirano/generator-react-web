import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import config from '../config.json';

/**
 * Create server
 *
 * @return {Promise}
 */
export default function server() {
    var bs = browserSync.create();

    bs.init({
        open: false,
        server: {
            baseDir: `./${config.buildDir}`,
            middleware: [historyApiFallback()]
        }
    });

    return Promise.resolve({ skip: true });
}

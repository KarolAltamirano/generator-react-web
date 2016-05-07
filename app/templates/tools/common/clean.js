import del from 'del';
import config from '../../config.json';

/**
 * Clean build folder
 *
 * @return {Promise}
 */
export default function clean() {
    return del([config.buildDir + '/**'], { dot: true });
}

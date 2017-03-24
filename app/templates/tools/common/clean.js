// @flow

import del from 'del';
import config from '../../config.json';

/**
 * Clean build folder
 *
 * @return {Promise}
 */
export default function clean(): Promise<any> {
    return del([`${config.buildDir}/**`], { dot: true });
}

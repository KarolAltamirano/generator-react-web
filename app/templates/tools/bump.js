import fs from 'fs';
import moment from 'moment';
import { exec } from 'child_process';
import { js_beautify as beautify } from 'js-beautify'; // eslint-disable-line camelcase
import pkg from '../package.json';

var _argv = process.argv[3];

/**
 * Validate argument
 *
 * @return {Promise}
 */
function validateParam() {
    return new Promise((resolve, reject) => {
        if (_argv !== 'patch' && _argv !== 'minor' && _argv !== 'major') {
            return reject('Specify valid semver version type to bump!');
        }

        resolve();
    });
}

/**
 * Update build time
 *
 * @return {Promise}
 */
function updateBuildTime() {
    var time,
        content;

    return new Promise((resolve, reject) => {
        time = moment().format('DD.MM.YYYY HH:mm:ss (ZZ)');
        pkg.time = time;

        content = beautify(JSON.stringify(pkg), { 'indent_size': 2, 'end_with_newline': true });

        fs.writeFile('package.json', content, (err) => {
            if (err) {
                return reject(err);
            }

            resolve();
        });
    });
}

/**
 * Bump build version
 *
 * @return {Promise}
 */
function bumpVersion() {
    return new Promise((resolve, reject) => {
        var oldVersion = pkg.version,
            newVersion;

        exec(`npm --no-git-tag-version version ${_argv}`, (err, stdout) => {
            if (err) {
                return reject(err);
            }

            newVersion = stdout.slice(0, -1);

            console.log(`Bumped v${oldVersion} to ${newVersion} with type: ${_argv}`);
            resolve();
        });
    });
}

export default function bump() {
    return validateParam()
        .then(updateBuildTime)
        .then(bumpVersion);
}

/* eslint no-var: 0, camelcase: 0, object-shorthand: 0, func-names: 0 */

var chromedriver = require('chromedriver');

module.exports = {
    src_folders: ['teste2e'],
    output_folder: false,
    test_settings: {
        default: {
            launch_url: 'http://localhost:3000',
            selenium_port: 9515,
            selenium_host: 'localhost',
            default_path_prefix: '',
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ['--no-sandbox']
                },
                acceptSslCerts: true
            },
            globals: {
                before: function (done) {
                    chromedriver.start();
                    done();
                },
                after: function (done) {
                    chromedriver.stop();
                    done();
                }
            }
        }
    }
};

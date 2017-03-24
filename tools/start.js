import fs from 'fs';
import { js_beautify as beautify } from 'js-beautify'; // eslint-disable-line camelcase
import pkg from '../app/templates/package.json';

function build() {
  return new Promise((resolve, reject) => {
    pkg.name = '<%= name %>';

    // eslint-disable-next-line camelcase
    const content = beautify(JSON.stringify(pkg), { indent_size: 2, end_with_newline: true });

    fs.writeFile('app/templates/package.json', content, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

console.log('Starting \'build\' ...');

build()
  .then(() => console.log('Finished \'build\''))
  .catch(err => console.error(err));

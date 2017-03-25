// @flow

import common from './common';
import noRetina from './noRetina';
import retina from './retina';

const isRetina = window.devicePixelRatio > 1;

function mainLoaderData(): Array<Object> {
  let data;

  if (isRetina) {
    data = common.concat(retina);
  } else {
    data = common.concat(noRetina);
  }

  return data;
}

export default {
  main: mainLoaderData()
};

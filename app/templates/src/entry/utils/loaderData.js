import loaderCommon from '../data/loaderCommon';
import loaderNoRetina from '../data/loaderNoRetina';
import loaderRetina from '../data/loaderRetina';

const isRetina = window.devicePixelRatio > 1;

function mainLoaderData() {
    let data;

    if (isRetina) {
        data = loaderCommon.concat(loaderRetina);
    } else {
        data = loaderCommon.concat(loaderNoRetina);
    }

    return data;
}

export default {
    main: mainLoaderData()
};

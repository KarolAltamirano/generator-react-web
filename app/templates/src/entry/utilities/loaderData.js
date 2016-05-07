import loaderCommon from '../data/loaderCommon';
import loaderNoRetina from '../data/loaderNoRetina';
import loaderRetina from '../data/loaderRetina';

var _isRetina = window.devicePixelRatio > 1;

var _mainLoaderData = function () {
    var data;

    if (_isRetina) {
        data = loaderCommon.concat(loaderRetina);
    } else {
        data = loaderCommon.concat(loaderNoRetina);
    }

    return data;
};

export default {
    'main': _mainLoaderData()
};

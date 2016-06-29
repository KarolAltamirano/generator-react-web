import Mustache from 'mustache';
import createjs from 'createjs';
import loaderData from './loaderData';

var Loader = {},
    _loaderList = {},
    _cache = {},
    _loaderElement = document.querySelector('.loader');

/**
 * Check if loader should be run in fallback mode
 *
 * @return {boolean}
 */
function _runFallback() {
    var result = false;

    // NOTE: set exceptions to run loader in fallback mode for particular devices if needed

    return result;
}

/**
 * Create loader
 *
 * @param  {string}   id       - id of new loader
 * @param  {Function} progress - callback function during loading
 * @param  {Function} complete - callback function when loading is completed
 */
Loader.createLoader = function (id, progress, complete) {
    if (_loaderList[id] != null) {
        throw new Error(`Loader with id: '${id}' already exists.`);
    }

    if (loaderData[id] == null) {
        throw new Error(`No data was found for loader with id '${id}'`);
    }

    // don't load as a binnary data in fallback mode
    if (_runFallback()) {
        loaderData[id] = loaderData[id].map((item) => {
            if (item.type === 'binary') {
                item.type = undefined;
            }
            return item;
        });
    }

    _cache[id] = [];

    // create loader - dont use xhr in fallback mode
    _loaderList[id] = new createjs.LoadQueue(!_runFallback());

    _loaderList[id].addEventListener('progress', progress);
    _loaderList[id].addEventListener('complete', complete);
    _loaderList[id].loadManifest(loaderData[id]);
};

/**
 * Get loader by its id
 *
 * @param  {string} id - id of a loaderData
 */
Loader.getLoader = function (id) {
    if (_loaderList[id] == null) {
        throw new Error(`Loader with id: '${id}' does not exist.`);
    }

    return _loaderList[id];
};

/**
 * Check if loader with id exists
 *
 * @param  {string} id - id of the loader
 */
Loader.exists = function (id) {
    return _loaderList[id] != null;
};

/**
 * Get asset from loader
 *
 * @param {string} loaderId - id of the loader
 * @param {string} assetId  - id of asset
 */
Loader.getAsset = function (loaderId, assetId) {
    var cachedAsset = _cache[loaderId].find(element => element.id === assetId);

    if (cachedAsset) {
        return cachedAsset.url;
    }

    var asset = loaderData[loaderId].find(element => element.id === assetId);

    // don't create blob in fallback mode
    if (_runFallback()) {
        return asset.src;
    }

    var newAssetURL = URL.createObjectURL(
        new Blob([Loader.getLoader(loaderId).getResult(assetId)], {
            type: asset.mimeType
        })
    );

    _cache[loaderId].push({
        id: assetId,
        url: newAssetURL
    });

    return newAssetURL;
};

/**
 * Destroy loaded asset
 *
 * @param {string} loaderId - id of the loader
 * @param {string} assetId  - id of asset
 */
Loader.destroyAsset = function (loaderId, assetId) {
    var cachedAsset = _cache[loaderId].find(element => element.id === assetId);

    if (cachedAsset) {
        _cache[loaderId].splice(_cache[loaderId].indexOf(cachedAsset), 1);
        URL.revokeObjectURL(cachedAsset.url);
    }
};

/**
 * Render loader to the DOM
 *
 * @param  {string} template - thml template
 * @param  {Object} style    - css style object
 * @param  {Object} copy     - page copy
 */
Loader.render = function (template, style, copy) {
    var output = Mustache.render(template, { style, copy });

    _loaderElement.innerHTML = output;
};

/**
 * Show loader
 */
Loader.show = function () {
    _loaderElement.style.display = 'block';
};

/**
 * Hide loader
 */
Loader.hide = function () {
    _loaderElement.style.display = 'none';
};

export default Loader;

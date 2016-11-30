import Mustache from 'mustache';
import createjs from 'createjs-preloadjs'; // eslint-disable-line import/no-unresolved
import loaderData from './loaderData';

const loaderList = {};
const cache = {};
const loaderElement = document.querySelector('.loader');

/**
 * Check if loader should be run in fallback mode
 *
 * @return {boolean}
 */
function runFallback() {
    // eslint-disable-next-line prefer-const
    let result = false;

    // NOTE: set exceptions to run loader in fallback mode for particular devices if needed

    return result;
}

const Loader = {
    /**
     * Create loader
     *
     * @param  {string}   id       id of new loader
     * @param  {Function} progress callback function during loading
     * @param  {Function} complete callback function when loading is completed
     */
    createLoader(id, progress, complete) {
        if (loaderList[id] != null) {
            throw new Error(`Loader with id: '${id}' already exists.`);
        }

        if (loaderData[id] == null) {
            throw new Error(`No data was found for loader with id '${id}'`);
        }

        // don't load as a binnary data in fallback mode
        if (runFallback()) {
            loaderData[id] = loaderData[id].map((item) => {
                if (item.type === 'binary') {
                    return Object.assign({}, item, {
                        type: undefined
                    });
                }
                return item;
            });
        }

        cache[id] = [];

        // create loader - dont use xhr in fallback mode
        loaderList[id] = new createjs.LoadQueue(!runFallback());

        loaderList[id].addEventListener('progress', progress);
        loaderList[id].addEventListener('complete', complete);
        loaderList[id].loadManifest(loaderData[id]);
    },

    /**
     * Get loader by its id
     *
     * @param  {string} id loaderData id
     */
    getLoader(id) {
        if (loaderList[id] == null) {
            throw new Error(`Loader with id: '${id}' does not exist.`);
        }

        return loaderList[id];
    },

    /**
     * Check if loader with id exists
     *
     * @param  {string} id loader id
     */
    exists(id) {
        return loaderList[id] != null;
    },

    /**
     * Get asset from loader
     *
     * @param {string} loaderId loader id
     * @param {string} assetId  asset id
     */
    getAsset(loaderId, assetId) {
        const cachedAsset = cache[loaderId].find(element => element.id === assetId);

        if (cachedAsset) {
            return cachedAsset.url;
        }

        const asset = loaderData[loaderId].find(element => element.id === assetId);

        // don't create blob in fallback mode
        if (runFallback()) {
            return asset.src;
        }

        const newAssetURL = URL.createObjectURL(
            new Blob([this.getLoader(loaderId).getResult(assetId)], {
                type: asset.mimeType
            })
        );

        cache[loaderId].push({
            id: assetId,
            url: newAssetURL
        });

        return newAssetURL;
    },

    /**
     * Destroy loaded asset
     *
     * @param {string} loaderId loader id
     * @param {string} assetId  asset id
     */
    destroyAsset(loaderId, assetId) {
        const cachedAsset = cache[loaderId].find(element => element.id === assetId);

        if (cachedAsset) {
            cache[loaderId].splice(cache[loaderId].indexOf(cachedAsset), 1);
            URL.revokeObjectURL(cachedAsset.url);
        }
    },

    /**
     * Render loader to the DOM
     *
     * @param  {string} template html template
     * @param  {Object} style    css style object
     * @param  {Object} copy     page copy
     */
    render(template, style, copy) {
        const output = Mustache.render(template, { style, copy });

        loaderElement.innerHTML = output;
    },

    /**
     * Show loader
     */
    show() {
        loaderElement.style.display = 'block';
    },

    /**
     * Hide loader
     */
    hide() {
        loaderElement.style.display = 'none';
    }
};

export default Loader;

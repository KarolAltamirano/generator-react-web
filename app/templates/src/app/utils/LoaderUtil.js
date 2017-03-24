// @flow

import createjs from 'createjs-preloadjs'; // eslint-disable-line import/no-unresolved
import manifest from '../manifest';

const loaderList = {};
const cache = {};

/**
 * Check if loader should be run in fallback mode
 *
 * @return {boolean}
 */
function runFallback(): boolean {
    // eslint-disable-next-line prefer-const
    let result = false;

    // NOTE: set exceptions to run loader in fallback mode for particular devices if needed

    return result;
}

// generate initial loader state
const initialState: Object = Object.keys(manifest).reduce((prev, curr) => (
    Object.assign({}, prev, {
        [curr]: 'none'
    })
), {});

const LoaderUtil = {
    /**
     * Loader state
     *     'none'     loader was not created yet
     *     'progress' loader is in progress
     *     'done'     loader has already loaded all assets
     *
     * @type {Object}
     */
    state: initialState,

    /**
     * Create loader
     *
     * @param  {string}   id       id of new loader
     * @param  {Function} progress callback function during loading
     * @param  {Function} complete callback function when loading is completed
     */
    createLoader(id: string, progress?: Function, complete?: Function): Promise<void> {
        if (loaderList[id] != null) {
            throw new Error(`Loader with id: '${id}' already exists.`);
        }

        if (manifest[id] == null) {
            throw new Error(`No data was found for loader with id '${id}'`);
        }

        // don't load as a binnary data in fallback mode
        if (runFallback()) {
            manifest[id] = manifest[id].map((item: Object): Object => {
                if (item.type === 'binary') {
                    return Object.assign({}, item, {
                        type: undefined,
                        getURL: true
                    });
                }
                return item;
            });
        }

        // initialize cache
        cache[id] = [];

        // set state to in progress
        this.state[id] = 'progress';

        // create loader - dont use xhr in fallback mode
        loaderList[id] = new createjs.LoadQueue(!runFallback());
        loaderList[id].setMaxConnections(3);

        // createjs.Sound.alternateExtensions = ['mp3'];
        // loaderList[id].installPlugin(createjs.Sound);

        if (typeof progress === 'function') {
            loaderList[id].addEventListener('progress', progress);
        }

        return new Promise((resolve: Function) => {
            loaderList[id].addEventListener('complete', (e: any) => {
                if (typeof complete === 'function') {
                    complete(e);
                }

                // set state when loader complete loading
                this.state[id] = 'done';

                resolve();
            });

            loaderList[id].loadManifest(manifest[id]);
        });
    },

    /**
     * Register loader
     *
     * @param  {string} id         loader id
     * @param  {Function} progress callback function
     * @param  {Function} complete callback function
     */
    registerLoader(id: string, progress?: Function, complete?: Function) {
        switch (this.state[id]) {
            case 'none':
                this.createLoader(id, progress, complete);
                break;
            case 'progress':
                progress && this.getLoader(id).addEventListener('progress', progress);
                complete && this.getLoader(id).addEventListener('complete', complete);
                break;
            case 'done':
                complete && complete();
                break;
            default:
                break;
        }
    },

    /**
     * Unregister loader
     *
     * @param  {string} id loader id
     */
    unregisterLoader(id: string) {
        this.getLoader(id).removeAllEventListeners();
    },

    /**
     * Get loader by its id
     *
     * @param  {string} id loaderList id
     */
    getLoader(id: string): Object {
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
    exists(id: string): boolean {
        return loaderList[id] != null;
    },

    /**
     * Get asset from loader
     *
     * @param {string} loaderId loader id
     * @param {string} assetId  asset id
     */
    getAsset(loaderId: string, assetId: string): any {
        const asset = manifest[loaderId].find(element => element.id === assetId);

        // check if asset with id exists
        if (asset == null) {
            throw new Error(`Asset with id '${assetId}' does not exists. Loader id '${loaderId}'`);
        }

        // return asset as it is in loader if it was not loaded as binary
        if (asset.type !== 'binary' && asset.getURL !== true) {
            return this.getLoader(loaderId).getResult(assetId);
        }

        // don't create blob in fallback mode
        if (runFallback() && asset.getURL === true) {
            return asset.src;
        }

        const cachedAsset = cache[loaderId].find(element => element.id === assetId);

        if (cachedAsset) {
            return cachedAsset.url;
        }

        // mimeType of the file
        // NOTE: add new mimeType here if needed
        let mimeType;

        if (asset.ext === 'png') {
            mimeType = 'image/png';
        }

        if (asset.ext === 'jpg') {
            mimeType = 'image/jpeg';
        }

        // create blob
        const newAssetURL = URL.createObjectURL(
            new Blob([this.getLoader(loaderId).getResult(assetId)], {
                type: mimeType
            })
        );

        // cache
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
    destroyAsset(loaderId: string, assetId: string) {
        const cachedAsset = cache[loaderId].find(element => element.id === assetId);

        if (cachedAsset) {
            cache[loaderId].splice(cache[loaderId].indexOf(cachedAsset), 1);
            URL.revokeObjectURL(cachedAsset.url);
        }
    }
};

export default LoaderUtil;

import 'babel-polyfill';
import 'whatwg-fetch';
import 'modernizr';
import 'normalize.css';

// import global styles
import './style/global/global.scss';

// import copy
import copy from '../copy/copy.json';

// incompatible browser screen
import Incompatible from './utils/Incompatible';
import incompatibleTemplate from './views/incompatible/incompatible.html';
import incompatibleStyle from './views/incompatible/incompatible.scss';

// build version
import Version from './utils/Version';
import versionTemplate from './views/version/version.html';
import versionStyle from './views/version/version.scss';

// loader
import Loader from './utils/Loader';
import loaderTemplate from './views/loader/loader.html';
import loaderStyle from './views/loader/loader.scss';

Incompatible.addClass();
Incompatible.render(incompatibleTemplate, incompatibleStyle, copy.incompatible);

Version.logConsole();
Version.render(versionTemplate, versionStyle, Version.getCopy());

// set loader callbacks
function progress(e) {
    const p = Math.round(100 * e.progress);

    // render progress in loader
    Loader.render(loaderTemplate, loaderStyle, { loader: p + copy.loader.progress });
}

function complete() {
    // create new chunk
    require.ensure([], (require) => {
        const App = require('../app/App').default;

        // hide loader
        Loader.hide();

        // run app
        App.run();
    });
}

// bootstrap application
window.addEventListener('load', () => {
    if (!Incompatible.isIncompatibleBrowser()) {
        // show loader
        Loader.render(loaderTemplate, loaderStyle, { loader: copy.loader.start });
        Loader.show();

        // start loader
        Loader.createLoader('main', progress, complete);
    }
});

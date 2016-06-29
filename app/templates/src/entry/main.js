import 'babel-polyfill';
import 'modernizr';
import 'normalize.css';

// import global styles
import './style/global/global.scss';

// import copy
import copy from '../copy/copy.json';

// render incompatible browser screen
import Incompatible from './utilities/Incompatible';
import incompatibleTemplate from './views/incompatible/incompatible.html';
import incompatibleStyle from './views/incompatible/incompatible.scss';

Incompatible.addClass();
Incompatible.render(incompatibleTemplate, incompatibleStyle, copy.incompatible);

// render build version
import Version from './utilities/Version';
import versionTemplate from './views/version/version.html';
import versionStyle from './views/version/version.scss';

Version.logConsole();
Version.render(versionTemplate, versionStyle, Version.getCopy());

// render loader
import Loader from './utilities/Loader';
import loaderTemplate from './views/loader/loader.html';
import loaderStyle from './views/loader/loader.scss';

// set loader callbacks
function _progress(e) {
    var p = Math.round(100 * e.progress);

    // render progress in loader
    Loader.render(loaderTemplate, loaderStyle, { loader: p + copy.loader.progress });
}

function _complete() {
    // create new chunk
    require.ensure([], function (require) {
        var App = require('../app/App').default;

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
        Loader.createLoader('main', _progress, _complete);
    }
});

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
import version from './utilities/version';
import versionTemplate from './views/version/version.html';
import versionStyle from './views/version/version.scss';

version.logConsole();
version.render(versionTemplate, versionStyle, version.getCopy());

// render loader
import loader from './utilities/loader';
import loaderTemplate from './views/loader/loader.html';
import loaderStyle from './views/loader/loader.scss';

// set loader callbacks
function _progress(e) {
    var p = Math.round(100 * e.progress);

    // render progress in loader
    loader.render(loaderTemplate, loaderStyle, { loader: p + copy.loader.progress });
}

function _complete() {
    // create new chunk
    require.ensure([], function (require) {
        var App = require('../app/App').default;

        // hide loader
        loader.hide();

        // run app
        App.run();
    });
}

// bootstrap application
window.addEventListener('load', () => {
    if (!Incompatible.isIncompatibleBrowser()) {
        // show loader
        loader.render(loaderTemplate, loaderStyle, { loader: copy.loader.start });
        loader.show();

        // start loader
        loader.createLoader('main', _progress, _complete);
    }
});

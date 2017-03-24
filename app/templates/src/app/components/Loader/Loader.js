// @flow

import React, { PropTypes } from 'react';

import style from './loader.scss';

const Loader = ({ progress }: Object) => (
    <div className={style.loader}>
        Loading... {progress}%
    </div>
);

Loader.propTypes = {
    progress: PropTypes.number.isRequired
};

export default Loader;

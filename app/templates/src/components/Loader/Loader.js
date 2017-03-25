// @flow

import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';

const Loader = ({ progress }: Object) => (
  <Wrapper>
    Loading... {progress}%
  </Wrapper>
);

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;

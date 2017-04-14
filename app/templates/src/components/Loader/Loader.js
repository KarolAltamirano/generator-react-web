// @flow

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Wrapper from './Wrapper';

const Loader = ({ progress }: Object) => (
  <Wrapper>
    <FormattedMessage {...messages.loading} values={{ progress }} />
  </Wrapper>
);

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;

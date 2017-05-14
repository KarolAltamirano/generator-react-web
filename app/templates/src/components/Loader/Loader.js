// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles';

const Loader = ({ progress }: Object) => (
  <div className={styles.wrapper}>
    <FormattedMessage {...messages.loading} values={{ progress }} />
  </div>
);

Loader.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default Loader;

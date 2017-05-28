// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const TemplateTwo = ({ number }: Object) => (
  <span className={styles.wrapper}>{number}</span>
);

TemplateTwo.propTypes = {
  number: PropTypes.number.isRequired,
};

export default TemplateTwo;

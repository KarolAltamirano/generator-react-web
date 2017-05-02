// @flow

import React, { PropTypes } from 'react';
import styles from './styles';

const TemplateTwo = ({ number }: Object) => (
  <span className={styles.wrapper}>{number}</span>
);

TemplateTwo.propTypes = {
  number: PropTypes.number.isRequired,
};

export default TemplateTwo;

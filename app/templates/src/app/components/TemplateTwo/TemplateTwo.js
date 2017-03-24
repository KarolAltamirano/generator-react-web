// @flow

import React, { PropTypes } from 'react';
import style from './templateTwo.scss';

const TemplateTwo = ({ number }: Object) => (
  <span className={style.templateTwo}>{number}</span>
);

TemplateTwo.propTypes = {
  number: PropTypes.number.isRequired
};

export default TemplateTwo;

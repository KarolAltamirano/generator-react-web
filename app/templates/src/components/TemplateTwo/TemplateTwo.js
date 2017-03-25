// @flow

import React, { PropTypes } from 'react';
import Wrapper from './Wrapper';

const TemplateTwo = ({ number }: Object) => (
  <Wrapper>{number}</Wrapper>
);

TemplateTwo.propTypes = {
  number: PropTypes.number.isRequired,
};

export default TemplateTwo;

import React, { PropTypes } from 'react';
import style from './templateTwo.scss';

const TemplateTwo = ({ number }) => (
    <span className={style.templateTwo}>{number}</span>
);

TemplateTwo.propTypes = {
    number: PropTypes.number.isRequired
};

export default TemplateTwo;

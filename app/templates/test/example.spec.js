// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { expect } from 'chai';
// import sinon from 'sinon';

describe('Example test', () => {
  let wrapper;

  const TestComponent = ({ title }) => (
    <div>{title}</div>
  );

  TestComponent.propTypes = {
    title: PropTypes.string.isRequired,
  };

  beforeEach(() => {
    wrapper = shallow(<TestComponent title="ahoj" />);
  });

  it('should run successfully', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('should run successfully too', () => {
    expect(wrapper.text()).to.equal('ahoj');
  });
});

import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';

import { expect } from 'chai';
// import sinon from 'sinon';

describe('Example test', function () {
    var wrapper;

    var TestComponent = function ({ title }) {
        return (
            <div>{title}</div>
        );
    };

    TestComponent.propTypes = {
        title: PropTypes.string.isRequired
    };

    beforeEach(function () {
        wrapper = shallow(<TestComponent title="ahoj" />);
    });

    it('should run successfully', function () {
        expect(wrapper.type()).to.equal('div');
    });

    it('should run successfully too', function () {
        expect(wrapper.text()).to.equal('ahoj');
    });
});

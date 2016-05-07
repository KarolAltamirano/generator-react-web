import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import { expect } from 'chai';
// import sinon from 'sinon';

describe('Example test', function () {
    var result;

    var TestComponent = function ({ title }) {
        return (
            <div>{title}</div>
        );
    };

    TestComponent.propTypes = {
        title: React.PropTypes.string.isRequired
    };

    beforeEach(function () {
        var renderer;

        renderer = ReactTestUtils.createRenderer();
        renderer.render(<TestComponent title="ahoj" />);
        result = renderer.getRenderOutput();
    });

    it('should run successfully', function () {
        expect(result.type).to.equal('div');
    });

    it('should run successfully too', function () {
        expect(result.props.children).to.equal('ahoj');
    });
});

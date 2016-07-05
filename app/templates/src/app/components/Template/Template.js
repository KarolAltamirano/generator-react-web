import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from '../../actions/AppActions';
import style from './template.scss';

import 'velocity-animate';
import 'velocity-animate/velocity.ui';
import { VelocityComponent, velocityHelpers } from 'velocity-react';

/**
 * Template React Component
 */
class Template extends React.Component {
    render() {
        var animationProps = {
            duration: 400,
            easing: 'spring',
            // delay: 1500,
            begin: () => console.log('animation begin'),
            progress: () => console.log('animation progress'),
            complete: () => console.log('animation complete'),
            animation: {
                translateX: this.props.template * 10
            }
        };

        var animationPropsTwo = {
            duration: 400,
            // delay: 0,
            animation: velocityHelpers.registerEffect({
                defaultDuration: 1000,
                calls: [
                    [{ translateX: this.props.template * 10 }, 0.5, { easing: 'linear' }],
                    [{ rotateZ: this.props.template * 90 }, 0.5, { easing: 'spring' }]
                ]
            })
        };

        return (
            <div>
                <button
                    className={style.template}
                    onClick={() => this.props.actions.placeholder(2)}
                >
                    Hello React
                </button>
                <button
                    className={style.template}
                    onClick={() => this.props.actions.placeholderAsync(2)}
                >
                    Hello React (Async)
                </button>
                <span className={style.template}>{this.props.template}</span>
                <div className={style.container}>
                    <VelocityComponent {...animationProps}>
                        <div className={style.element}></div>
                    </VelocityComponent>
                </div>
                <div className={style.container}>
                    <VelocityComponent {...animationPropsTwo}>
                        <div className={style.element}></div>
                    </VelocityComponent>
                </div>
            </div>
        );
    }
}

// define propTypes
Template.propTypes = {
    actions: PropTypes.object.isRequired,
    template: PropTypes.number.isRequired
};

// Template.defaultProps = {};

/**
 * Map Redux store state to Component props
 *
 * @param  {Object} state - Redux store state
 *
 * @return {Object}
 */
function mapStateToProps(state) {
    return {
        template: state.template
    };
}

/**
 * Bind AppActions to Redux store function and map them to Component props
 *
 * @param  {Function} dispatch - Redux store dispatch function
 *
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from '../../actions/AppActions';
import style from './template.scss';

import gsap from 'gsap';

/**
 * Template React Component
 */
class Template extends React.Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        template: PropTypes.number.isRequired
    };

    static defaultProps = {};

    elOne = null;
    elTwo = null;

    componentDidUpdate() {
        gsap.TweenMax.to(this.elOne, 0.4, {
            x: this.props.template * 10
        });
        gsap.TweenMax.to(this.elTwo, 0.4, {
            x: this.props.template * 10,
            rotation: this.props.template * 90
        });
    }

    render() {
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
                    <div ref={(el) => this.elOne = el} className={style.element}></div>
                </div>
                <div className={style.container}>
                    <div ref={(el) => this.elTwo = el} className={style.element}></div>
                </div>
            </div>
        );
    }
}

/**
 * Map Redux store state to Component props
 *
 * @param  {Object} state Redux store state
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
 * @param  {Function} dispatch Redux store dispatch function
 *
 * @return {Object}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);

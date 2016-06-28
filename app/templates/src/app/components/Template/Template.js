import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from '../../actions/AppActions';
import style from './template.scss';

/**
 * Template React Component
 */
class Template extends React.Component {
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

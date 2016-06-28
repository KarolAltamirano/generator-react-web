import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppActions from '../../actions/AppActions';
import style from './template.scss';

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

Template.propTypes = {
    actions: PropTypes.object.isRequired,
    template: PropTypes.number.isRequired
};

// Template.defaultProps = {};

function mapStateToProps(state) {
    return {
        template: state.template
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AppActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);

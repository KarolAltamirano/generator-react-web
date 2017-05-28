// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FormattedMessage } from 'react-intl';
import gsap from 'gsap';

import messages from './messages';

import styles from './styles.scss';

import AppActions from '../../actions/AppActions';
import TemplateTwo from '../../components/TemplateTwo';

/**
 * Template React Component
 */
class Template extends Component {
  elOne: ?HTMLElement;
  elTwo: ?HTMLElement;

  static propTypes = {
    actions: PropTypes.object.isRequired,
    template: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  componentDidMount() {
    this.animate(0, this.props.template);
  }

  componentWillReceiveProps(nextProps: Object) {
    if (nextProps.template === this.props.template) {
      return;
    }

    this.animate(0.4, nextProps.template);
  }

  animate(time: number, position: number) {
    gsap.TweenMax.to(this.elOne, time, {
      x: position * 10,
      force3D: true,
    });
    gsap.TweenMax.to(this.elTwo, time, {
      x: position * 10,
      rotation: position * 90,
      force3D: true,
    });
  }

  render(): ?React$Element<any> {
    return (
      <div>
        <FormattedMessage {...messages.button}>
          {value => (
            <button
              className={styles.button}
              onClick={() => this.props.actions.placeholder(2)}
            >{value}</button>
          )}
        </FormattedMessage>
        <FormattedMessage {...messages.buttonAsync}>
          {value => (
            <button
              className={styles.button}
              onClick={() => this.props.actions.placeholderAsync(2)}
            >{value}</button>
          )}
        </FormattedMessage>
        <TemplateTwo number={this.props.template} />
        <div className={styles.wrapper}>
          <div className={styles.element} ref={el => this.elOne = el} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.element} ref={el => this.elTwo = el} />
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
function mapStateToProps(state: Object): Object {
  return {
    template: state.template,
  };
}

/**
 * Bind AppActions to Redux store function and map them to Component props
 *
 * @param  {Function} dispatch Redux store dispatch function
 *
 * @return {Object}
 */
function mapDispatchToProps(dispatch: Function): Object {
  return {
    actions: bindActionCreators(AppActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Template);

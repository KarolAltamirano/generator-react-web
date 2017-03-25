// @flow

import React, { PropTypes } from 'react';

import Loader from '../../components/Loader/Loader';
import Version from '../../components/Version/Version';
import AppSettings from '../../utils/AppSettings';
import LoaderUtil from '../../utils/LoaderUtil';

export default class Main extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state: Object = {
    progress: 0,
    completed: false
  };

  componentDidMount() {
    LoaderUtil.registerLoader('main', e => this.progress(e), () => this.complete());
  }

  componentWillUnmount() {
    LoaderUtil.unregisterLoader('main');
  }

  progress(e: any) {
    this.setState({ progress: Math.round(100 * e.progress) });
  }

  complete() {
    this.setState({ completed: true });
  }

  render(): React$Element<any> {
    return (
      <div>
        {
          this.state.completed
            ? this.props.children
            : <Loader progress={this.state.progress} />
        }
        {AppSettings.renderVersionInfo ? <Version /> : null}
      </div>
    );
  }
}

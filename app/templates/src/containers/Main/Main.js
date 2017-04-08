// @flow

import React, { PropTypes } from 'react';

import Loader from '../../components/Loader';
import Version from '../../components/Version';
import AppSettings from '../../utils/AppSettings';
import LoaderUtil from '../../utils/LoaderUtil';

export default class Main extends React.Component {
  state: Object;

  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      progress: 0,
      completed: false,
    };

    (this: any).progress = this.progress.bind(this);
    (this: any).complete = this.complete.bind(this);
  }


  componentDidMount() {
    LoaderUtil.registerLoader('main', this.progress, this.complete);
  }

  componentWillUnmount() {
    LoaderUtil.unregisterLoader('main', this.progress, this.complete);
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

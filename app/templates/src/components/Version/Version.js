// @flow

import React from 'react';
import Wrapper from './Wrapper';

import config from '../../../config.json';

export default class Version extends React.Component {
  state: Object = {
    version: config.build.version,
    time: config.build.time
  };

  componentDidMount() {
    console.log(
      `\n%cv${this.state.version}%c %c${this.state.time}%c\n\n`,
      'color: #ffffff; background: #00aa00; padding: 1px 5px;',
      'color: #ffffff; background: #d1eeee; padding: 1px 5px;',
      'color: #ffffff; background: #00aa00; padding: 1px 5px;',
      'background: #ffffff;'
    );
  }

  render(): ?React$Element<any> {
    return (
      <Wrapper>
        v{this.state.version} <span>| {this.state.time}</span>
      </Wrapper>
    );
  }
}
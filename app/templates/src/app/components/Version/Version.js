// @flow

import React, { PropTypes } from 'react';

import style from './version.scss';

export default class Version extends React.Component {
    static propTypes = {
        version: PropTypes.string,
        time: PropTypes.string
    };

    static defaultProps = {
        version: '',
        time: ''
    };

    componentDidMount() {
        console.log(
            `\n%cv${this.props.version}%c %c${this.props.time}%c\n\n`,
            'color: #ffffff; background: #00aa00; padding: 1px 5px;',
            'color: #ffffff; background: #d1eeee; padding: 1px 5px;',
            'color: #ffffff; background: #00aa00; padding: 1px 5px;',
            'background: #ffffff;'
        );
    }

    render(): ?React$Element<any> {
        return (
            <div className={style.version}>
                v{this.props.version} <span>| {this.props.time}</span>
            </div>
        );
    }
}

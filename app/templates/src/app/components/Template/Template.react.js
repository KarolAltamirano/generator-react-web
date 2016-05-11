import React from 'react';
import style from './template.scss';
import AppStore from '../../stores/AppStore';
import AppActions from '../../actions/AppActions';

class Template extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }

    onChange() {
        console.log('onChange handler called');
    }

    onClick() {
        console.log('Clicked ...');
        AppActions.placeholder();
    }

    render() {
        return (
            <div className={style.template} onClick={this.onClick}>Hello react</div>
        );
    }
}

// Template.propTypes = {};
// Template.defaultProps = {};

export default Template;

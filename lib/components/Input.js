import React, { PropTypes, Component } from 'react';

let style = {
    border: '1px solid black',
    fontSize: '1.2em',
    height: '2.5em',
    paddingLeft: '20px'
}

export default class Login extends Component {
    render() {
        return <input
                style={style}
                type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
            />
    }
};

import React, { PropTypes, Component } from 'react';

let style = {
    display: 'inline-block',
    fontSize: '1em',
    fontWeight: '700',
    letterSpacing: '0.5px',
    margin: '1.5em 20px 0.75em'
}

export default class Label extends Component {
    render() {
        return (
            <label
                style={style}
                htmlFor={this.props.myFor}
            >{this.props.label}</label>
        )
    }
};

import React, { PropTypes, Component } from 'react';

let style = {
    border: '1px solid black',
    marginTop: '20px'
}

export default class Card extends Component {
    render() {
        return <div style={style}>{this.props.children}</div>
    }
};

import React, { PropTypes, Component } from 'react';

let style = {
    backgroundColor: 'white',
    border: '1px solid black',
    fontSize: '1em',
    fontWeight: '700',
    marginTop: '3em',
    padding: '1em',
    width: '100%',
}

export default class SubmitButton extends Component {
    render() {
        return (
            <input
                style={style}
                type="submit"
                value={this.props.label}
            />
        )
    }
};

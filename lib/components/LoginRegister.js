import React, { PropTypes, Component } from 'react';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';

let style = {
    border: '1px solid black',
    display: 'inline-block',
    padding: '1.5em 4em 3em'
}

export default class LoginRegister extends Component {
    render() {
        return <div style={style}>
            <form>
                <Label myFor="email" label="email"></Label>
                <br />
                <Input
                    type="text"
                    name={this.props.name}
                />
                <br />

                <Label myFor="password" label="password" />
                <br />

                <Input
                    type="password"
                    name="password"
                />
                <br />

                <SubmitButton label="login / register" />
            </form>
        </div>
    }
};

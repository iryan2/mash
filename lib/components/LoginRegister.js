import React, { PropTypes, Component } from 'react';
import Card from './Card';
import Label from './Label';
import Input from './Input';
import SubmitButton from './SubmitButton';

let style = {
    margin: '1.5em 4em 3em'
}

export default class LoginRegister extends Component {
    render() {
        return <Card>
            <form style={style}>
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
        </Card>
    }
};

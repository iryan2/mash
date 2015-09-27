import React, { Component } from 'react';
import LoginRegister from './LoginRegister';

let style = {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
};

class App extends Component {
    render() {
        return <div style={style}>
            <LoginRegister />
        </div>
    }
}

export default App;

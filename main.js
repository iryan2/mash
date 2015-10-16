import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './lib/components/App';
import Library from './lib/components/Library';

let rootElement = document.getElementById('root');
React.render((
    <Router>
        <Route path="/" component={Library} />
        <Route path="admin" component={App} />
    </Router>
), rootElement );


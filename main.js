import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './lib/components/App';

let rootElement = document.getElementById('root');
React.render((
    <Router>
        <Route path="/" component={App}>
            <Route path="library" component={App}>
            </Route>
        </Route>
    </Router>
), rootElement );


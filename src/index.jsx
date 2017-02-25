import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


import AppRoutes from './routes/main.jsx';

injectTapEventPlugin();
ReactDOM.render(
    (
        <Router history={browserHistory}>
        {AppRoutes}
        </Router>
    ), document.getElementById('blog')
);
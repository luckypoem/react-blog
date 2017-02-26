import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './module/App.jsx';
import PostList from './partial/PostList.jsx'

injectTapEventPlugin();
ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PostList}/>
            </Route>
        </Router>
    ), document.getElementById('blog')
);
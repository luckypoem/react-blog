import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store/createStore';
import App from './module/App.jsx';
import PostList from './partial/PostList.jsx'
import PostCardContainer from './container/PostContainer.jsx'

injectTapEventPlugin();
ReactDOM.render(
    (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PostList}/>
                <Route path="/post/:postName" component={PostCardContainer}/>
            </Route>
        </Router>
    </Provider>
    ), document.getElementById('blog')
);
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../module/App.jsx';
import PostList from '../partial/PostList.jsx'

const AppRoutes = (
    <Route path="/" component={App}>
        <Route path="/p" component={PostList}/>
    </Route>
);

export default AppRoutes;
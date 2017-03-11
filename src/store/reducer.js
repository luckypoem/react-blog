import { combineReducers } from 'redux'

import {LOAD_SPECIFIED_POST, LOG_IN_USER} from './actions';

function specifiedPost(postID = '', action) {
    switch (action.type) {
        case LOAD_SPECIFIED_POST:
            return action.postID;

        default:
            return postID;
    }
}

function loggedInUserName(userName = '', action) {
    switch (action.type) {
        case LOG_IN_USER:
            return action.userName;

        default:
            return userName;
    }
}

export default combineReducers({
    postID: specifiedPost,
    user: loggedInUserName
});
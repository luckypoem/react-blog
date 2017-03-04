import { combineReducers } from 'redux'

import {LOAD_SPECIFIED_POST} from './actions';

function specifiedPost(postID = '', action) {
    switch (action.type) {
        case LOAD_SPECIFIED_POST:
            return action.postID;

        default:
            return postID;
    }
}

export default combineReducers({
    postID: specifiedPost
});
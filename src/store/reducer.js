import { combineReducers } from 'redux'

import {LOAD_SPECIFIED_POST} from './actions';

const initialState = {
    postID: ''
};

export default function specifiedPost(state = initialState, action) {
    switch (action.type) {
        case LOAD_SPECIFIED_POST:
            return {
                postID: action.postID
            };

        default:
            return state;
    }
}

// export default combineReducers({
//     specifiedPost
// });
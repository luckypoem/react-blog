export const LOAD_SPECIFIED_POST = 'LOAD_SPECIFIED_POST';
export const LOG_IN_USER = 'Log_IN_USER';

export function loadSpecifiedPost(ID) {
    return {
        type: LOAD_SPECIFIED_POST,
        postID: ID
    }
}

export function logInUser(userName) {
    return {
        type: LOG_IN_USER,
        userName: userName
    }
}
export const LOAD_SPECIFIED_POST = 'LOAD_SPECIFIED_POST';

export function loadSpecifiedPost(ID) {
    return {
        type: LOAD_SPECIFIED_POST,
        postID: ID
    }
}
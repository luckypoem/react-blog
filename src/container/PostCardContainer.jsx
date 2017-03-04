import React from 'react';
import { connect } from 'react-redux';
import { loadSpecifiedPost } from '../store/actions'

import PostCard from '../partial/PostCard.jsx';

class PostCardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {post, updatePostID} = this.props;

        return <PostCard post={post} setPostID={updatePostID}/>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatePostID: (ID) => {
            dispatch(loadSpecifiedPost(ID));
        }
    }
}

export default connect(null, mapDispatchToProps)(PostCardContainer);
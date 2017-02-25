import React from 'react';
import PostCard from './PostCard.jsx'

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {posts} = this.props;
        if(posts.length == 0) {
            return <PostCard post={{title: "zhimakaimen1234455"}}/>
        }

        return (
            posts.map((post)=>{
                return <PostCard post={post}/>
            })
        )
    }
}

export default PostList;
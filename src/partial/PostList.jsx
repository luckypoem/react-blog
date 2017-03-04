import React from 'react';
import axios from 'axios';

import PostCardContainer from '../container/PostCardContainer.jsx';



class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        axios.get('/api/post_list').then((postList) => {
            this.setState({
                ready: true,
                posts: postList.data
            })
        })
    }

    render() {
        if (this.state.ready) {
            let i = 0;

            return (
                <div>
                {
                    this.state.posts.map((post) => {
                        i += 1;
                        return (
                            <PostCardContainer post={post} key={i}/>
                        )
                    })
                }
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default PostList;
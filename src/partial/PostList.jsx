import React from 'react';
import PostCard from './PostCard.jsx'
import axios from 'axios';


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
                            <PostCard post={post} key={i}/>
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
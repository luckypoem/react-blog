import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


import Post from '../partial/Post.jsx';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidMount() {
        let {postID, params} = this.props;

        if(postID === '') {
            axios.get('/api/post_name/' + params.postName).then((post) => {
                this.setState({
                    post: post.data,
                    ready: true
                })
            })
        }
        else {
            axios.get('/api/post_id/' + postID).then((post) => {
                this.setState({
                    post: post.data,
                    ready: true
                })
            })
        }


    }


    render() {
        if(!this.state.ready) {
            return <div></div>
        }
        else{
            return (
                <Post post={this.state.post}/>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        postID: state.postID
    }
}

export default connect(mapStateToProps)(PostContainer);
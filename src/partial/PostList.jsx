import React from 'react';
import PostCard from './PostCard.jsx'
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

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


            return (
                <div>
                {
                    this.state.posts.map((post) => {
                        return (<MuiThemeProvider key={post.title}><PostCard post={post}/></MuiThemeProvider>)
                    })
                }
                </div>

            )
        }
        else {
            return (
                <MuiThemeProvider>
                    <Card/>
                </MuiThemeProvider>
            )
        }


    }
}

export default PostList;
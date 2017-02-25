import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PostList from './PostList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            posts: []
        };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    fetchPosts() {

    }

    componentDidMount() {
        console.log("Fetch data");
        axios.get('/api/post_list').then((postList) => {
            this.setState((prevState, postList) => ({
                posts: postList
            }))
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <PostList posts={this.state.posts}/>
            </MuiThemeProvider>
            )
    }
}

export default App;
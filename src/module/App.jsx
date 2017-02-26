import React from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


import PostList from '../partial/PostList.jsx';


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

    }

    render() {
        return (
        <div>
            <MuiThemeProvider>
                <AppBar/>
            </MuiThemeProvider>
            {this.props.children}
        </div>


    )
    }
}

export default App;
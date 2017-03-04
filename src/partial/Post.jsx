import React from 'react';
import {
    Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let {post} = this.props;
        return (
            <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        )
    }
}
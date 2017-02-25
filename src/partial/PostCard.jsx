import React from 'react';
import {
    Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {post} = this.props;
        return (
            <Card key={post.title}>
                <CardActions actAsExpander={true}/>
                <CardTitle title={post.title} subtitle={post.excerpt} actAsExpander={true}/>
                <CardText expandable={true}>{post.text}</CardText>
            </Card>
        )
    }
}
export default PostCard;
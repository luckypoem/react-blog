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
                <CardHeader title={post.title}/>
            </Card>
        )
    }
}
export default PostCard;
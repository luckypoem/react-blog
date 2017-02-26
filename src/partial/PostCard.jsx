import React from 'react';
import {Card} from 'antd';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {post} = this.props;
        return (
            <Card title={post.title}>
                {post.content}
            </Card>
        )
    }
}
export default PostCard;
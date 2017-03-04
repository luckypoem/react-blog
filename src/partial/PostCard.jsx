import React from 'react';
import {Link} from 'react-router';
// import {Card} from 'antd';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let {setPostID, post} = this.props;
        setPostID(post._id);
        return;
    }


    render() {
        let {post} = this.props;

        return (
            <div>
                <Link
                    to={'/post/' + post.title}
                    onClick={this.handleClick}
                >
                    <h3>{post.title}</h3>
                </Link>
                <p>{post.content}</p>
            </div>
        )
    }

}
export default PostCard;
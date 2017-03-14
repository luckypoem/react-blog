import React from 'react';
import ReactDOM from 'react-dom';
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

    componentDidMount() {
        let {post} = this.props;
        const newContent = (
            <div>
                {post.content}
            </div>
        );
    }

    render() {
        let {post} = this.props;

        const postBody = {__html: post.content};
        return (
            <div>
                <Link
                    to={'/post/' + post.title}
                    onClick={this.handleClick}
                >
                    <h3>{post.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={postBody}/>
            </div>
        )
    }

}
export default PostCard;
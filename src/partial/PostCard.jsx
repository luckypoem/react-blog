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
        const style = {
            'marginBottom': '5%',

                'font-size': '1.2em',

            },

            contentStyle = {
                'marginTop': '2%',
                'lineHeight': '150%',
                'font-size': '1.2em',

            };
        let {post} = this.props;

        const postBody = {__html: post.content};
        return (
            <div style={style}>
                <Link
                    to={'/post/' + post.title}
                    onClick={this.handleClick}
                >
                    <h2>{post.title}</h2>
                </Link>
                <div style={contentStyle} dangerouslySetInnerHTML={postBody}/>
            </div>
        )
    }

}
export default PostCard;
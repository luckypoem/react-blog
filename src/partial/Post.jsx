import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const style = {
                marginTop: '5%',
                marginBottom: '5%',
                lineHeight: '200%',

                fontSize: '1.5em',
            },

            content_style = {
                marginTop: '5%',

                fontSize: '1em',
                lineHeight: '200%',

                paddingBottom: '350%',
            };

        let {post} = this.props;
        const postBody = {__html: post.content};
        return (
            <div style={style}>
                <h2>{post.title}</h2>
                <div className="content" style={content_style} dangerouslySetInnerHTML={postBody}/>
            </div>
        )
    }
}
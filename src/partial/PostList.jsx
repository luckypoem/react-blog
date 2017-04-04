import React from 'react';
import axios from 'axios';

import PostCardContainer from '../container/PostCardContainer.jsx';
import MoreButton from './MoreButton.jsx'



class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            current_page_number: 1
        };
        this.handleClickMoreButton = this.handleClickMoreButton.bind(this);
    }

    componentWillMount() {
        axios.get('/api/get_post_number').then((result)=>{
            if(result.data.number <= 10) {
                this.setState({showMoreButton: false})
            } else {
                this.setState({showMoreButton: true})
            }

            this.setState({
                number_of_posts: result.data.number
            })
        })
    }

    componentDidMount() {
        axios.get('/api/post_list?p='+this.state.current_page_number).then((postList) => {
            this.setState({
                ready: true,
                posts: postList.data
            })
        })
    }

    render() {
        if (this.state.ready) {
            let i = 0;

            return (
            <div>
                <div>
                    {
                        this.state.posts.map((post) => {
                            i += 1;
                            return (
                                <PostCardContainer post={post} key={i}/>
                            )
                        })
                    }
                </div>
                <MoreButton show={this.state.showMoreButton} handleClickMoreButton={this.handleClickMoreButton}/>
            </div>

            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    handleClickMoreButton() {
        let number = this.state.current_page_number + 1;
        axios.get('/api/post_list?p=' + number).then((result)=>{
            let newPostListData = this.state.posts.concat(result.data);
            this.setState({
                posts: newPostListData,
                current_page_number: number
            });

            if(number * 10 >= this.state.number_of_posts) {
                this.setState({showMoreButton: false});
            }
        })
    }
}

export default PostList;
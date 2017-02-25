import React from 'react';
import PostCard from './PostCard.jsx'

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {posts} = this.props;
        if(posts.length == 0) {
            return <PostCard post={{
                title: "我很开心，瞬间爆炸",
                excerpt: "天气很好",
                text: "他强调，北京城市规划建设和北京冬奥会筹办工作是当前和今后一个时期北京市的两项重要任务，要认真贯彻党中央决策部署，坚持首善标准，解放思想、开阔思路，求真务实、攻坚克难，统筹生产、生活、生态，立足提高治理能力抓好城市规划建设，着眼精彩非凡卓越筹办好北京冬奥会，努力开创首都发展更加美好的明天。"
            }}/>
        }

        return (
            posts.map((post)=>{
                return <PostCard post={post}/>
            })
        )
    }
}

export default PostList;
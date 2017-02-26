import React from 'react';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';

const {Header, Content, Footer} = Layout;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: 0,
            posts: []
        };
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    fetchPosts() {

    }

    componentDidMount() {

    }

    render() {
        return (

            <Layout className="layout">
                <div>
                    <Menu mode="horizontal" theme="light">
                        <Menu.Item key="1">Index</Menu.Item>
                    </Menu>
                </div>

                <Content>
                    {this.props.children}
                </Content>

                <Footer>
                    Designed by zhboner.
                </Footer>
            </Layout>


    )
    }
}

export default App;
import React from 'react';
import {Layout, Row, Col} from 'antd';
import 'antd/dist/antd.css';

import TopBar from '../partial/TopBar.jsx';

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

            <div className="layout">

                <Row>
                    <Col span={12} push={12}>
                        <TopBar/>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} push={6}>
                        {this.props.children}
                    </Col>
                </Row>

                <Footer>
                    Designed by zhboner.
                </Footer>
            </div>

            //
            // <Row>
            // <Col span={18} push={6}>
            // <Menu mode="hotizontal">
            // <Menu.Item key="1">Index</Menu.Item>
            // </Menu>
            // </Col>
            // </Row>
            // <Row>
            // {this.props.children}
            // </Row>
            // </div>

        )
    }
}

export default App;
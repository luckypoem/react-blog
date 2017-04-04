import React from 'react';
import {Layout, Row, Col, BackTop} from 'antd';
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
    }

    render() {
        let topStyle = {
            marginTop: '2em',
            marginBottom: '5em'
        };
        return (
            <div className="layout">
                <Row style={topStyle}>
                    <Col span={12} push={12}>
                        <TopBar/>
                    </Col>
                </Row>

                <Row>
                    <Col span={12} push={6}>
                        {this.props.children}
                    </Col>
                    <Col span={3} push={20}>
                        <BackTop />
                    </Col>
                </Row>

                <Footer>
                    Designed by zhboner.
                </Footer>
            </div>
        )
    }
}

export default App;
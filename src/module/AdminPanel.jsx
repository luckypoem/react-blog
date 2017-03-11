import React from 'react';
import cookie from 'react-cookie';
import {browserHistory} from 'react-router';
import {Row, Col} from 'antd';

import AdminMenu from '../partial/AdminMenu.jsx';

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div>
                <Row gutter={32}>
                    <Col span={6}>
                        <AdminMenu/>
                    </Col>
                    <Col span={12}>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AdminPanel;
import React from 'react';
import {browserHistory} from 'react-router';
import {Layout, Menu, Row, Col} from 'antd';

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(item) {
        switch (item.key) {
            case '1':
                browserHistory.push('/');
                break;
            case '2':
                browserHistory.push('/about');
                break;
            case '3':
                browserHistory.push('/admin');
                break;
        }
    }


    render() {
        return (
            <Menu mode="horizontal"
                  onClick={this.handleClick}
            >
                <Menu.Item key="1">Index</Menu.Item>
                <Menu.Item key="2">About</Menu.Item>
                <Menu.Item key="3">Admin</Menu.Item>
            </Menu>
        )
    }
}

// TopBar.contextTypes = {
//     router: React.PropTypes.object
// };

export default TopBar;

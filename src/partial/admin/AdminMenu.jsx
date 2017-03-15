import React from 'react';
import {browserHistory} from 'react-router';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu,
    Item = Menu.Item;

class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        if(item.key == '0') {
            browserHistory.push('/');
            return;
        }

        let pathArray = item.keyPath;
        pathArray.push('/admin');
        pathArray.reverse();
        let path = pathArray.join('/');
        console.log(path);
        browserHistory.push(path);
    }

    render() {

        return (
            <Menu onClick={this.handleClick} mode="inline">
                <Item key="0">Front page</Item>
                <SubMenu key="post" title="Post">
                    <Item key="new_post">New post</Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default AdminMenu;
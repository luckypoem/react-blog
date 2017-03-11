import React from 'react';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu,
    Item = Menu.Item;

class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        console.log(item);
    }

    render() {

        return (
            <Menu onClick={this.handleClick} mode="inline">
                <SubMenu key="SubMenuPost" title="Post">
                    <Item key="SubMenuPost-NewPost">New post</Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default AdminMenu;
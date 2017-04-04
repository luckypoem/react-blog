import React from 'react';
import {Button, Icon} from 'antd';

class MoreButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            margin: 'auto',
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: 'large'
        };
        if(this.props.show) {
            return (
                //<Button shape="circle" icon="down" size="large" onClick={this.props.handleClickMoreButton} style={style}/>
                <div className="more-button" style={style} onClick={this.props.handleClickMoreButton}><Icon type="down-circle" />  Read More</div>
            )
        } else {
            return (
                <div></div>
            )
        }


    }
}

export default MoreButton;
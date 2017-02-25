import React from 'react';
import {
    Card, CardActions, CardHeader, CardMedia, CardTitle, CardText
} from 'material-ui/Card';

export default class Single extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        let {title, text} = this.props;
        return (
            <Card>
                <CardTitle title={title}/>
                <CardText>{text}</CardText>
            </Card>
        )
    }
}
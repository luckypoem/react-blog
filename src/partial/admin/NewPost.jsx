import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';

import Store from '../../store/createStore';

const FormItem = Form.Item;
class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = this.props.form;
        let user = Store.getState().user,
            postTitle = form.getFieldValue('postTitle'),
            postContent = form.getFieldValue('postContent');
        console.log(user,postContent,postTitle);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return (

            <Form onSubmit={this.handleSubmit} className="new-post">
                <FormItem>
                    {getFieldDecorator('postTitle', {
                        rules: [{
                            required: true, message: 'Please input a title'
                        }]
                    })(
                        <Input placeholder="Title"/>
                    )}
                </FormItem>

                <FormItem>
                    {getFieldDecorator('postContent', {})(
                        <Input type='textarea' size='large'/>
                    )}
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="submit-button">Submit</Button>
                </FormItem>

            </Form>
        )
    }
}

export default Form.create()(NewPost);
import React from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import axios from 'axios';

import Store from '../../store/createStore';
import {TextEditor, output} from '../TextEditor.jsx';

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
            postContent = output();
        console.log(user,postContent,postTitle);
        axios.post('/api/admin/post/new_post', {
            author: user,
            title: postTitle,
            post: postContent
        }).then((result)=>{
            if (result.data.success) {
                console.log('success')
            } else {
                console.log('fail')
            }
        })
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
                    <TextEditor/>
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit" className="submit-button">Submit</Button>
                </FormItem>

            </Form>
        )
    }
}

export default Form.create()(NewPost);
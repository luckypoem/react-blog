import React from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import {Row, Col, Form, Icon, Input, Button, Checkbox} from 'antd';

import Store from '../store/createStore';

const FormItem = Form.Item;
class LogInterferce extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        if (this.props.user) {
            browserHistory.push('/');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let {handleLogin} = this.props,
            form = this.props.form;

        let userName = form.getFieldValue('userName'),
            password = form.getFieldValue('password');

        axios.post('/api/admin', {
            user: userName,
            password: password
        }).then((result) => {
            if (result.data.passed) {
                browserHistory.push('/');
                handleLogin(userName);
            } else {
                form.setFieldsValue({
                    userName: '',
                    password: ''
                })
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Row>
                    <Col span={8} offset={8}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {
                                    getFieldDecorator('userName', {
                                    rules: [{required: true, message: 'Please input your user name'}]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="Username"/>
                                    )
                                }

                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your Password'}]
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>Remember me</Checkbox>
                                )}
                                <a className="login-form-forgot">Forgot password</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    login
                                </Button>
                            </FormItem>

                        </Form>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Form.create()(LogInterferce);
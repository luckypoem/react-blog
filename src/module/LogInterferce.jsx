import React from 'react';
import {browserHistory, Link} from 'react-router';
import axios from 'axios';
import {Row, Col, Form, Icon, Input, Button, Checkbox, message} from 'antd';
import cookie from 'react-cookie';

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
        else {
            let userName = cookie.load('user'),
                password = cookie.load('password'),
                {handleLogin} = this.props;

            axios.post('/api/admin', {
                user: userName,
                password: password
            }).then((result) => {
                if (result.data.passed) {
                    handleLogin(userName);
                    browserHistory.push('/admin');
                }
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let {handleLogin} = this.props,
            form = this.props.form;

        let userName = form.getFieldValue('userName'),
            password = form.getFieldValue('password'),
            saveCookie = form.getFieldValue('remember');

        axios.post('/api/admin', {
            user: userName,
            password: password
        }).then((result) => {
            if (result.data.passed) {
                browserHistory.push('/');
                handleLogin(userName);

                let cookieOption = {
                    path: '/',
                };
                cookie.save('user', userName, cookieOption);
                cookie.save('password', password, cookieOption);
            } else {
                message.error("user name or password not valid!");
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
                        <Link to="/">Back to front page.</Link>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Form.create()(LogInterferce);
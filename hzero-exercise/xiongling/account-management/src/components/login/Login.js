/*
 * @Description: 登录界面
 * @Date: 2019-08-11 14:59:53
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import axios from '../../common/axios';
import { Form, Input, Icon, Button } from 'antd';
import '../../assets/css/login.css';


class Logins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      spinLoading: false,
      isShowPage: false,
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("login message is : ", values);
        axios.post("http://localhost:3000/login", values).then((response) => {
          console.log(response);
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login" >
        <div className="login-body">
          <div className="login-logo">
            <Icon type="team" style={{ fontSize: 26, marginRight: 12 }} />
            <span style={{ color: '#3185DE' }}>账户管理系统</span>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
const Login = Form.create()(Logins);
export default Login;

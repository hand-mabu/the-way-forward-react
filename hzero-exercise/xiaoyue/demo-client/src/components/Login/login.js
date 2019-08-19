import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from "antd";
import Axios from '../../tools/axios';
import { getFileItem } from 'antd/lib/upload/utils';
class Logins extends Component {
  constructor(props) {
    super(props);
  }

  // 登录
  handleSubmit(e) {
    const { history } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, user) => {
      if (!err) {
        let obj = { userId: user.userName, password: user.password }
        Axios.post(`http://127.0.0.1:3000/login`, obj).then(res => {
          if (res) {
            if (!!res.data.data.isLogin) {
              let userInfos = { userId: res.data.data.userId, userName: res.data.data.userName }
              localStorage.setItem('userInfo', JSON.stringify(userInfos));
              // 登录成功后前往首页
              this.goIndexPage();
            } else {
              message.error(res.data.msg);
            }
          } else {
            message.error('服务器异常，请稍后再试');
          }
        }).catch(err => {
          console.log(err);
        });
      }
    })
  }

  // 页面跳转
  goIndexPage() {
    const { history } = this.props;
    history.replace('/');
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={(e) => { this.handleSubmit(e) }} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(<Input prefix={<Icon type="user" />} placeholder="UserName" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(<Input prefix={<Icon type="lock" />} type='password' placeholder="Password" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form.Item>
      </Form>
    )
  }
}
const Login = Form.create()(Logins);
export default Login;
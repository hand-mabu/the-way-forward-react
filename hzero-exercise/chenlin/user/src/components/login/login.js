import React, { Component } from 'react';
import { Form, Icon, Input, Button ,message} from 'antd';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      flag1: 0
    }
  }
  componentWillMount() {

  }
  register = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let url = 'http://localhost:8080/user/register';
        axios.get(url,{params:{
          username:values.username,
          password:values.password,
        }}).then(res=>{
          if(res.status === 200){
            if(res.data.flag === 1){
              message.success(res.data.msg);
            }else{
              message.info(res.data.msg);
            }
          }else{
            message.warn('登录失败，请重试！');
          }
        }
        )
      }
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let url = 'http://localhost:8080/user/login';
        axios.get(url,{params:{
          username:values.username,
          password:values.password,
        }}).then(res=>{
          if(res.status === 200){
            if(res.data.flag === 1){
              message.success(res.data.msg);
              console.log(this.props);
              const{history} = this.props;
              history.push({pathname:"/home",query: { name : values.username }});
            }else{
              message.info(res.data.msg);
            }
          }else{
            message.warn('登录失败，请重试！');
          }
        }
        )
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div style={{width:"500px",margin:"10% auto",border:'1px solid #aaa',padding:'20px 20px'}}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <div style={{padding:'20px'}}>
          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;
          Or &nbsp;&nbsp;<div style={{display:'inline'}} onClick={(e)=>{this.register(e)}}>register now!</div>
        </div>
      </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(Login)
export default LoginForm;

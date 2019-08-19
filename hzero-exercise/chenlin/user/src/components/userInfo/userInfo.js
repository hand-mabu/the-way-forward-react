import React, { Component } from 'react';
import { Form, Input,  message, Col, Row ,Icon} from 'antd';
import axios from 'axios';


class userInfo extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      data: []
    }
  }
  componentWillMount() {
    this.setState({
      name: this.props.match.params.name
  });
    let url = `http://localhost:8080/user/getUser?name=${this.props.match.params.name}`;
        axios.get(url).then(res=>{
          console.log(res);
          if(res.status === 200 && res.data.length === 1){
            this.setState({data:res.data},()=>{
              this.props.form.setFieldsValue({
                userName:res.data[0].name,
                age:res.data[0].age,
                phone:res.data[0].phone,
                sex:res.data[0].sex,
                role:res.data[0].role === 1?'普通用户':'管理员',
                note:res.data[0].note,
            });
            });
          }else{
            message.warn('查询失败，请重试！');
          }
        }
      )
      
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const { TextArea } = Input;
    return (
      <div style={{padding:'10%'}}>
        <Form >
          <Row gutter={24}>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="用户名">
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input disabled/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="年龄">
                {getFieldDecorator('age', {
                  rules: [{ required: false }],
                })(
                  <Input disabled/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="手机号码">
                {getFieldDecorator('phone', {
                  rules: [{ required: false }],
                  
                })(
                  <Input disabled/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="性别">
                {getFieldDecorator('sex', {
                  rules: [{ required: false }],
                })(
                  <Input disabled/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="备注">
                {getFieldDecorator('note', {
                  rules: [{ required: false }],
                })(
                  <TextArea disabled/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="权限">
                {getFieldDecorator('role', {
                  rules: [{ required: false }],
                })(
                  <Input disabled/>,
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const userInfoForm = Form.create()(userInfo)
export default userInfoForm;

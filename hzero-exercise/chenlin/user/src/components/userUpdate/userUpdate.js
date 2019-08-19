import React, { Component } from 'react';
import { Form, Input,  message, Col, Row,InputNumber,Select,Button  } from 'antd';
import axios from 'axios';
const { Option } = Select;

class userUpdate extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
    this.getInfo();
      
  }
  getInfo = ()=>{
    let url = `http://localhost:8080/user/getUser?name=${this.props.match.params.name}`;
        axios.get(url).then(res=>{
          if(res.status === 200 && res.data.length === 1){
            this.setState({data:res.data[0]},()=>{
              this.props.form.setFieldsValue({
                name:res.data[0].name,
                age:res.data[0].age,
                phone:res.data[0].phone,
                sex:res.data[0].sex,
                role:res.data[0].role,
                note:res.data[0].note,
            });
            });
          }else{
            message.warn('查询失败，请重试！');
          }
        }
      )
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let url = 'http://localhost:8080/user/modifyUser';
        axios.get(url,{params:{
          user:values,
        }}).then(res=>{
          console.log(res);
          if(res.status === 200){
          this.getInfo();
          message.success('修改成功！',2); 
          }else{
            message.warn('修改失败，请重试！',2);
          }
        }
        )
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const { TextArea } = Input;
    const{data} = this.state;
    return (
      <div style={{padding:'10%'}}>
        <Form onSubmit={this.handleSubmit}>
          <Row gutter={24}>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="用户名">
                {getFieldDecorator('name', {
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
                  <InputNumber/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="手机号码">
                {getFieldDecorator('phone', {
                  rules: [{ required: false }],
                  
                })(
                  <Input />,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="性别">
                {getFieldDecorator('sex', {
                  rules: [{ required: false }],
                })(
                  <Select >
                    <Option value='1'>女</Option>
                    <Option value='2'>男</Option>
                </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="备注">
                {getFieldDecorator('note', {
                  rules: [{ required: false }],
                })(
                  <TextArea/>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Form.Item {...formItemLayout}label="权限">
                {getFieldDecorator('role', {
                  rules: [{ required: false }],
                })(
                  <Select disabled={data.role !== 2}>
                    <Option value={1}>普通用户</Option>
                    <Option value={2}>管理员</Option>
                </Select>,
                )}
              </Form.Item>
            </Col>
            <Col span={14}>
              <Button htmlType="submit">保存</Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

const userUpdateForm = Form.create()(userUpdate)
export default userUpdateForm;

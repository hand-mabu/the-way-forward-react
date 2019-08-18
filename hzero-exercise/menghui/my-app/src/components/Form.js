import React from 'react';
import { Form , Input , Button } from 'antd';

const FormItem = Form.Item;
const formItemLayout = {
    labelCol : {span : 5},
    wrapperCol : {span : 15} 
};
class FormLayout extends React.Component{
    
    handleSubmit(e){
        e.preventDefault();
        const comfirmHandle =  this.props.comfirmHandle;
        const fieldsValue = this.props.form.getFieldsValue();

        //表单校验
        this.props.form.validateFields(function(errors,value){
            //校验通过
            if(!errors){
                comfirmHandle(fieldsValue); //获取当前表单数据并当做回调函数的参数传递给父组件
            }
        });
       
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { record } = this.props;

        return (
            <Form onSubmit= {this.handleSubmit.bind(this)}>
                <FormItem label="用户编号" {...formItemLayout} style={{display:'none'}}>
                    {getFieldDecorator('id', { 
                        initialValue : record ? record.id : ""
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="名称" {...formItemLayout}>
                    {getFieldDecorator('name', {
                        initialValue : record ? record.name : ""
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="学号" {...formItemLayout}>
                    {getFieldDecorator('student_id', {
                        initialValue : record ? record.student_id : ""
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem label="性别" {...formItemLayout}>
                    {getFieldDecorator('gender', {
                        initialValue : record ? record.gender : ""
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem wrapperCol={{ span: 10, offset: 10 }}>
                    <Button type="primary" htmlType="submit">
                        确定
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default FormLayout = Form.create()(FormLayout);
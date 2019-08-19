import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Table, Row, Col, Input, Button ,message} from "antd";
import Axios from '../../tools/axios';

class UserManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterConditions: {
        userId: '',
        userName: '',
      },
      dataSource: [],
    }
  }
  componentWillMount() {
    this.checkUserInfos();
  }
  checkUserInfos() {
    let filters = this.state.filterConditions;
    Axios.get(`http://127.0.0.1:3000/users/query?userId=${filters.userId}&userName=${filters.userName}`).then(res=>{
      if(res){
        let data = res.data.data;
        let result = data.map(item=>{
          return {
            id:item.id,
            userId:item.user_id,
            userName:item.user_name,
            isEdit:false
          }
        })
        this.setState({
          dataSource:result
        })
      }else{
        message.error('服务器异常，请稍后再试');
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  // 删除用户
  deleteUserInfo(userInfo){
    let id = userInfo.id;
    Axios.delete(`http://127.0.0.1:3000/users/deleteInfo?id=${id}`).then(res=>{
      if(res){
        message.success(res.data.msg);
        this.checkUserInfos();
      }else{
        message.error('服务器异常，请稍后再试');
      }
    }).catch(err=>{
      console.log(err);
    })
  }
  // 编辑用户信息
  editUserInfo(userInfo){
    let {dataSource} = this.state;
    let result = dataSource.map(item=>{
      if(item.id == userInfo.id){
        item.isEdit = true;
      }
      return item;
    })
    this.setState({
      dataSource:result
    });
  }
  render() {
    const userColumns = [{
      title: <div>ID<span style={{ color: "red" }}> * </span></div>,
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => {
        return <div>{record.id}</div>
      }
    },{
      title: <div>用户ID<span style={{ color: "red" }}> * </span></div>,
      dataIndex: 'userId',
      key: 'userId',
      render: (text, record, index) => {
        if(record.isEdit){
          return <Input value={text}/>
        }else{
          return <div>{record.userId}</div>
        }
      }
    },{
      title: <div>用户名称<span style={{ color: "red" }}> * </span></div>,
      dataIndex: 'userName',
      key: 'userName',
      render: (text, record, index) => {
        if(record.isEdit){
          return <Input value={text}/>
        }else{
          return <div>{record.userName}</div>
        }
      }
    },{
      title:<div>编辑</div>,
      key:'operation',
      render:(text,record,index)=>{
        if(record.isEdit){
          return <div>
            <Button type="link" onClick={(e)=>{this.editUserInfo(record)}}>保存</Button>
            <Button type="link" onClick={(e)=>{this.editUserInfo(record)}}>取消</Button>
          </div>
        }else{
          return <div>
            <Button type="link" onClick={(e)=>{this.editUserInfo(record)}}>编辑</Button>
          </div>
        }
      }
    },{
      title:<div>删除</div>,
      key:'operation',
      render:(text,record,index)=>{
        return <div>
          <Button type="link" onClick={(e)=>{this.deleteUserInfo(record)}}>删除</Button>
        </div>
      }
    }]
    return (
      <div className="user-manager">
        <div className="check-condition">
          <div style={{ height: "30px", lineHeight: "30px", borderBottom: "1px solid #eee", fontWeight: "bolder", marginBottom: "10px", fontSize:"14px" }}>用户管理：</div>
          <div>
            <Row gutter={24}>
              <Col span={8}>
                <label>ID </label>
                <Input
                  style={{ width: "70%" }} placeholder="请输入用户ID" onChange={(value) => {
                    let filter = Object.assign({}, this.state.filterConditions, { userId: value.target.value });
                    this.setState({
                      filterConditions: filter
                    })
                  }} />
              </Col>
              <Col span={8}>
                <label>用户名称 </label>
                <Input
                  style={{ width: "70%" }} placeholder="请输入用户名称" onChange={(value) => {
                    let filter = Object.assign({}, this.state.filterConditions, { userName: value.target.value });
                    this.setState({
                      filterConditions: filter
                    })
                  }} />
              </Col>
              <Col span={6}>
                <Button type="primary" style={{ width: "40%" }} onClick={(e)=>{this.checkUserInfos()}}>查询</Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="user-table" style={{marginTop:"20px"}}>
          <Table
            columns={userColumns}
            dataSource={this.state.dataSource}
            bordered
            pagination={false}
          ></Table>
        </div>
      </div>
    )
  }
}
export default UserManager;
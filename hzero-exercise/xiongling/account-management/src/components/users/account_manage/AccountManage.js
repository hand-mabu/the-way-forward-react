/*
 * @Description: 账号管理组件
 * @Date: 2019-08-18 15:16:02
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */

import React, { Component } from 'react';
import { Button, Table, Input } from 'antd';
import "../../../assets/css/accountManage.css";

const Search = Input.Search;

class AccountManage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleSearch = (userName) => {
    console.log(userName)
  }

  render() {
    const userColumns = [
      {
        key: "userName",
        width: "20%",
        align:'center',
        title: "用户名",
      },{
        key: "password",
        width: "20%",
        align:'center',
        title: "密码",
      },{
        key: "email",
        width: "20%",
        align:'center',
        title: "邮箱",
      },{
        key: "phone",
        width: "10%",
        align:'center',
        title: "电话",
      },{
        key: "address",
        width: "30%",
        align:'center',
        title: "地址",
      }
    ];
    let usersData = [];
    return (
      <div className="account-manage" >
        <div><span style={{ color: "blue" }}>账号管理</span></div>
        {/* Button 区域 */}
        <div style={{ marginTop: 10 }}>
          <Button type="primary" >新建</Button>
          <Button type="danger" style={{ marginLeft: 15 }} >删除</Button>
          <Search 
            placeholder="请输入用户名"
            onSearch={(userName) => {this.handleSearch(userName)}}
            style={{ marginLeft: 15, width: 200 }}
          />
        </div>
        {/* Table 区域 */}
        <div style={{ marginTop: 10 }}>
          <Table 
            bordered={true}
            columns={userColumns}
            dataSource={usersData}
            size={"middle"}
            pagination={false}
          ></Table>
        </div>
      </div>
    );
  }

}

export default AccountManage;

import React, { Component } from 'react';
import { Form, message, Icon, Row, Table } from 'antd';
import axios from 'axios';


class userDelete extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      data: [],
      dataTotal: 0,
    }
  }
  componentWillMount() {
    this.setState({
      name: this.props.match.params.name
  },()=>{
    this.getAll();
  });
    
  }
  getAll = () => {
    let url = `http://localhost:8080/user/getAllUser`;
    axios.get(url).then(res => {
      console.log(res);
      if (res.status === 200) {
        this.setState({ data: res.data, dataTotal: res.data.length });
      } else {
        message.warn('查询失败，请重试！');
      }
    }
    )
  }

  render() {
    const { data, dataTotal } = this.state;
    const columns = [
      {
        title: "id",
        dataIndex: "id",
        width: '9%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "用户名",
        dataIndex: "name",
        width: '9%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "手机号码",
        dataIndex: "phone",
        width: '12%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "性别",
        dataIndex: "sex",
        width: '8%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "年龄",
        dataIndex: "age",
        width: '9%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "备注",
        dataIndex: "note",
        width: '10%',
        render: (text, record, index) => {
          return <div>{text}</div>;
        }
      }, {
        title: "操作",
        dataIndex: "operate",
        width: '10%',
        render: (text, record, index) => {
          console.log(record);
          return <div onClick={() => {
            let id = record.id;
            if (record.role === 2) {
              message.warn('抱歉，您无权限删除此用户！')
              return
            }
            let url = `http://localhost:8080/user/userDelete?id=${id}`;
            axios.get(url).then(res => {
              console.log(res);
              if (res.status === 200) {
                message.success('删除成功！', 2);
                this.getAll();
              } else {
                message.warn('删除失败，请重试！');
              }
            }
            )
          }}><Icon type='delete' ></Icon></div>;
        }
      }];

    return (
      <div style={{ padding: '10%' }}>
        <Table columns={columns}
          dataSource={data}
          style={{ marginTop: 20 }}
          pagination={{
            size: "small",
            total: dataTotal,
            pageSize: 10
          }}></Table>
      </div>
    );
  }
}

const userDeleteForm = Form.create()(userDelete)
export default userDeleteForm;

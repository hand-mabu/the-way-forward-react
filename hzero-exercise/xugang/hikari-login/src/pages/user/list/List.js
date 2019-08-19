import $ from  'jquery'
import React from 'react';
import { Table, Button, Input, Divider, notification } from 'antd';
import { connect } from 'react-redux';
import { deleteUser } from '../../../config/redux/action';

class List extends React.Component {

  constructor(props) {
    super(props);
    let that = this;
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        render(name, record) {
          return (
            <Input
              defaultValue={name}
              onChange={e => record.name = e.target.value}
            />
          )
        }
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        render(name, record) {
          return (
            <Input
              defaultValue={name}
              onChange={e => record.email = e.target.value}
            />
          )
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        render(name, record) {
          return (
            <Input
              defaultValue={name}
              onChange={e => record.age = e.target.value}
            />
          )
        }
      },
      {
        title: '地址',
        dataIndex: 'address',
        render(name, record) {
          return (
            <Input
              defaultValue={name}
              onChange={e => record.address = e.target.value}
            />
          )
        }
      },
      {

        title: "操作",
        render: record => (
          <span>
            {record.type === "new" && (
              <span>
                <a onClick={e => that.handleSave(record)}>
                  完成
                </a>
                <Divider type="vertical" />
                <a onClick={e => that.removeAdd(record)}>
                  取消
                </a>
              </span>
            )}
            {record.type === "edit" && (
              <span>
                <a onClick={e => that.editSubmit(record)}>
                  完成
                </a>
                <Divider type="vertical" />
                <a onClick={e => that.giveUpUpdata(record)}>
                  取消
                </a>
                <Divider type="vertical" />
                <a onClick={e => that.delete(record)}>
                  删除
                </a>
              </span>
            )}
            {record.type === "view" && (
              <span>
                <a onClick={e => that.edit(record)}>
                  编辑
                </a>
                <Divider type="vertical" />
                <a onClick={e => that.delete(record)}>
                  删除
                </a>
              </span>
            )}
          </span>
        ),
        width: 150
      }
    ];

    this.state = {
      selectedRowKeys: [],
      loading: false,
      data: [],
      count: 10002
    };
  }

  componentDidMount () {
    this.init();
  }

  handleAdd = () => {
    const { data, count } = this.state;
    const newData = {
      id: count,
      name: "",
      email: "",
      age: "",
      address: "",
      type: "new"
    };
    this.setState({
      data: [...data, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.data];
    const index = newData.findIndex(item => row.id === item.id);
    const item = newData[index];
    row.type = 'view';
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    $.post("http://localhost:9000/user", row)
    .then(res => {
      notification["success"]({ message: "保存成功！" });
      this.setState({ data: newData });
    });
  };

  onSelectChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
  };

  edit(record) {
    let { data } = this.state.data;
    let newData = data.filter(item => {
      if (item.id === record.id) {
        item.type = "edit";
        return item;
      } else if (item.type !== "new") {
        item.type = "view";
        return item;
      }
    });
    this.updateDataSource(newData, true);
  }

  updateDataSource(newData, isAddDisabled) {
    this.setState({
      data: newData
    });
  }

  delete(record) {
    let { data } = this.state;
    setTimeout(res => {
      let index = data.findIndex(item => item.id === record.id);
      data.splice(index, 1);
      this.updateDataSource(data);
      // this.props.delete(record);
      fetch('http://localhost:9000/user/' + record.id,{method : 'delete'})
      .then(res => {
        notification["success"]({ message: "删除成功！" });
      })
    });
  }

  giveUpUpdata(record) {
    let { data } = this.state;
    let editRow = data.find(item => item.id === record.id);
    editRow.type = "view";
    this.updateDataSource(data);
  }

  removeAdd(record) {
    let { data } = this.state;
    data.pop();
    this.updateDataSource(data);
  }

  init = () => {
    $.get("http://localhost:9000/user")
      .then((res) => {
        this.setState({
          data: res
        })
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { loading, selectedRowKeys, data } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    
    return (
      <div className="content-wrap">
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.handleAdd} loading={loading}>
            添加
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `选择 ${selectedRowKeys.length} 条记录` : ''}
          </span>
        </div>
        <Table rowKey={record => record.id} bordered={true} rowSelection={rowSelection} columns={this.columns} dataSource={data} />
      </div>
    );
  }

}

const mapUserStateToProps = () => {
  return {}
};

const mapUserDispatchToProps = (dispatch) => {
  return {
    delete(record) {
      dispatch(deleteUser(record));
    }
  }
};

export default connect(mapUserStateToProps, mapUserDispatchToProps)(List)

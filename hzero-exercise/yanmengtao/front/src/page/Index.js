import React from 'react';
import { connect } from "react-redux";
import axios from '@Axios';
import { addAccount, setAccount } from '@actions';
import { Table, Row, Col, Button } from 'antd';
import UserBlock from '@Components/UserBlock';


const columns = [
  {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '账号',
    dataIndex: 'account',
    key: 'account',
  },
];

const AccountTable = ({ dispatch, accounts, axiosSaveAccount }) => (
  <div>
    <Button onClick={() => dispatch(addAccount())}>Add Account</Button>
    <Button onClick={() => axiosSaveAccount(accounts)}>Save Account</Button>
    <Table rowKey="account" dataSource={accounts} columns={columns} />
  </div>
)


const mapUserStateToProps = state => {
  return {
    userInfo: state.user
  }
}

const mapAccountStateToProps = state => {
  return {
    accounts: state.accounts
  }
}

const User = connect(mapUserStateToProps)(UserBlock);
const Account = connect(mapAccountStateToProps)(AccountTable);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.axiosSaveAccount = this.axiosSaveAccount.bind(this);
  }
  componentDidMount() {
    axios.get('/account').then(res => {
      this.props.dispatch(setAccount(res));
    });
  }
  axiosSaveAccount(data) {
    // console.log(data);
    axios.post('/account', data).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={3}><User /></Col>
        <Col span={15}><Account axiosSaveAccount={this.axiosSaveAccount} /></Col>
      </Row>
    )
  }
}

export default connect()(Index);
/*
 * @Description: 管理系统组件
 * @Date: 2019-08-18 16:30:00
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../utils/asyncComponent';

const AccountManage = asyncComponent(() => import("./account_manage/AccountManage"));
// const Home = asyncComponent(() => import("../home/Home"));

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={`${match.url}/account_manage`} component={AccountManage} />
        {/* <Route exact path="/home" component={Home} /> */}
      </Switch>
    );
  }
}

export default Users;

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import UserManager from '../UserManager/UserManager';
// import { Link } from 'react-router';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);
  }
  Linkto(path, text) {
    const { AppState, history } = this.props;
    history.replace(path);
  }
  render() {
    return (
      <Layout className="index-page">
        <Header className="header">
          <div style={{ color: '#fff', fontSize: "18px" }}>用户管理系统</div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu mode="inline">
              <Menu.Item key="1">
                <div
                  style={{ padding: 0, width: "100%" }}
                  onClick={this.Linkto.bind(this, `/`, '')}>
                  <span>首页</span>
                </div>
              </Menu.Item>
              <Menu.Item key="2">
                <div
                  style={{ padding: 0, width: "100%" }}
                  onClick={this.Linkto.bind(this, `/userManager`, '')}>
                  <span>用户管理</span>
                </div>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 540,
            }}>
              <Switch>
                <Route exact path="/userManager" component={UserManager} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
export default Main;
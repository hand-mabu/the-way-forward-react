/*
 * @Description: 系统整体布局文件（左上中布局）
 * @Date: 2019-08-11 14:37:24
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import '../assets/css/App.css';

const { Header, Sider, Content } = Layout;

class LayoutApp extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" ><div style={{ margin: '0 0 0 20px' }}>MABU账号管理</div></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>账号管理</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="global" />
              <span>组织管理</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="setting" />
              <span>系统管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#ffffff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: document.body.clientHeight - 112,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutApp;

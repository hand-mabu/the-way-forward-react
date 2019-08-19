/*
 * @Description: 系统整体布局文件（左上中布局）
 * @Date: 2019-08-11 14:37:24
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import RouteConfig from '../routes/';
import '../assets/css/App.css';

const { Header, Sider, Content } = Layout;

class LayoutApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, // 是否折叠菜单
    };
  }

  componentWillMount() {
    if (!localStorage.getItem("isLogin") || localStorage.getItem("isLogin") !== "success") {
      const { history } = this.props;
      history.replace("/login");
    }
  }

  // 菜单折叠属性控制
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClickMenu = event => {
    console.log(event.key);
    let path = '';
    let { match, history } = this.props;
    switch (event.key) {
      case 'INDEX':
          path = 'home';
          break;
      case 'ACCOUNT_MANAGE':
        path = 'users/account_manage';
        break;

      default:
        path = 'not_found404';
        break;
    }
    console.log(match.url);
    history.replace(`${match.url}${path}`);
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" ><div style={{ margin: '0 0 0 20px' }}>账号管理系统</div></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['INDEX']} onClick={this.handleClickMenu} >
            <Menu.Item key="INDEX">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="ACCOUNT_MANAGE">
              <Icon type="user" />
              <span>账号管理</span>
            </Menu.Item>
            <Menu.Item key="GLOBAL">
              <Icon type="global" />
              <span>组织管理</span>
            </Menu.Item>
            <Menu.Item key="SETTING">
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
              padding: 15,
              background: '#fff',
              minHeight: document.body.clientHeight - 112.5,
            }}
          >
            <RouteConfig />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutApp;

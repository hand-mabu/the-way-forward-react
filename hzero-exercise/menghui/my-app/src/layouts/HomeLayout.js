import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class HomeLayout extends React.Component{

    render(){
        const { children } = this.props;
        return (
            <Layout>
                <Header className="header">
                    <div className="logo">
                        <span style={{color:"#fff",fontSize:22,fontWeight:"bold"}}>BookManager</span>
                    </div>
                    
                </Header>

                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                            
                            <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
                                <Menu.Item key="1">
                                    <Link to="/user/list">用户列表</Link>
                                </Menu.Item>

                            </SubMenu>

                        </Menu>
                    </Sider>

                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight:480 }}>
                            { children }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default HomeLayout;
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import menus from '../common/menu';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import userInfo from '../userInfo/userInfo';
import homeIndex from './homeIndex';
import userDelete from '../userDelete/userDelete';
import userUpdate from '../userUpdate/userUpdate';

const { Header, Sider } = Layout;


class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            flag1: 0,
            role: 0
        }
    }
    componentWillMount() {
        let url = `http://localhost:8080/user/getUser?name=${this.props.location.query.name}`;
        axios.get(url).then(res => {
            console.log(res);
            if (res.status === 200 && res.data.length === 1) {
                this.setState({ role: res.data[0].role });
            } else {
                this.setState({ role: 1 });
            }
        }
        )

    }
    render() {
        const { role } = this.state;
        const renderMenu = () => {
            let myMenus = menus;

            if (role < 2) {
                myMenus = menus.filter(item=>{
                   
                     return item.code !== 'userDelete';
                   
                });
            }
            console.log(myMenus);
            let menuItem = []
            myMenus.map(item => {
                menuItem.push(<Menu.Item key={item.code}>
                    <Link to={item.link + `/${this.props.location.query.name}`}>
                        <div style={{ padding: 0, width: "100%" }}>{item.text}</div>
                    </Link>
                </Menu.Item>);
            });
            return menuItem;
        };
        return (
            <Layout>
                <Router >
                    <Header className="header">
                        <div className="logo" />
                        <div style={{ float: 'right', color: '#fff', fontSize: '20px' }}>欢迎~{this.props.location.query.name}</div>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >

                                {
                                    renderMenu()
                                }
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <div
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Route exact path='/home' component={homeIndex} />
                                <Route exact path='/home/homeIndex/:name' component={homeIndex} />
                                <Route exact path='/home/userInfo/:name' component={userInfo} />
                                <Route exact path='/home/userUpdate/:name' component={userUpdate} />
                                <Route exact path='/home/userDelete/:name' component={userDelete} />
                            </div>
                        </Layout>
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

export default Home;

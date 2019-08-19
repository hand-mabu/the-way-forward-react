import React,{Component} from 'react';

import {
	Layout,
	List,
	Typography ,
	Button,Avatar ,Row,Col,
	Icon
} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

import profile from '../../common/images/eric.jpg';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user'


const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;
class Profile extends Component{
  componentDidMount(){
    this.props.auth();
  }
  render(){
    return(
      <div>
	   <Layout>
      <Header></Header>
      <Content>
	    <div ></div>
	    <div >
    <Row type="flex" justify="start">
      <Col className="gutter-row" span={4}></Col>
	  <Col className="gutter-row" span={2}></Col>
	  <Col className="gutter-row" span={2}></Col>
	  <Col className="gutter-row" span={2}></Col>
      <Col className="gutter-row" span={2}>
	  <div>
	    <Avatar shape="square" src={profile} size={150} icon="user" />
	  </div>
	  <Link to={'/login'}> 请先登录</Link>
	  </Col>
	   <Col className="gutter-row" span={4}></Col>
    </Row>
	  </div>
	  </Content>
      <Footer></Footer>
    </Layout>
      </div>
    )
  }
}
export default connect(state=>({...state}),action)(Profile)
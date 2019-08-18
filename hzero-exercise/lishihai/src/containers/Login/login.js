import React,{Component} from 'react';


import {
	Layout,
	List,
	Typography ,
	Button,Avatar ,Row,Col,Input ,
	Icon
} from 'antd';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
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

class Login extends Component{
 constructor(){
    super();
    this.state = {username:'',password:'',isValid:true}
  }
  componentWillMount(){
    this.props.validate();
  }
  login =()=>{
	  // 登录逻辑验证
  if(this.state.username && this.state.password){
	   this.props.login(this.state)
  }
  };
  render(){
    return(
      <div>
	  
	   <Layout>
	    <Header></Header>
	    <Content>
		 <br />
         <br />
	      <div style={{ marginBottom: 16 }}>
		  
		  <Row type="flex" justify="start">
		    <Col className="gutter-row" span={4}></Col>
		   
		    <Col className="gutter-row" span={2}></Col>
		    <Col className="gutter-row" span={2}></Col>
		    <Col className="gutter-row" span={2}>
		    <div>
			<div>
			  <Avatar shape="square" src={profile} size={300} icon="user" />
			</div>
			 <br />
             <br />
			<Input placeholder="用户名" size="large" value={this.state.username} onChange={(e)=>{
            this.setState({username:e.target.value})
          }}  style={{ width: '300px' }}/>
			<br />
			<br />
			<Input.Password placeholder="密码"  size="large" value={this.state.password} onChange={(e)=>{
            this.setState({password:e.target.value})
          }}
		  style={{ width: '300px' }}/>
			<br />
			<br />
			<Button size="large" type="primary" style={{ width: '300px' }}  onClick = {
				this.login
			} > 登录 < /Button>
		    </div>
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
export default connect(state=>({...state}),action)(Login)



 /* <ul className="login-input">
          <li><input type="text" placeholder="用户名"  value={this.state.username} onChange={(e)=>{
            this.setState({username:e.target.value})
          }
		  
		  }/></li>
          <li><input type="text" placeholder="密码" value={this.state.password} onChange={(e)=>{
            this.setState({password:e.target.value})
          }}/></li>
          <li><Link to={'/register'} className="goReg">注册</Link></li>
          <li><a className="login_btn" onClick={this.login}>登录</a></li>
        </ul> */
		
	
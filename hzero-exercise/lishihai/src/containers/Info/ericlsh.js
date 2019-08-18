import React,{Component} from 'react';

import {
	Layout,
	List,
	Typography ,
	Button,Avatar ,Row,Col,Input,
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

class Eric extends Component{
  constructor (props) {
        super(props);
        this.state = {
            data: [
  {name:"npm中文文档：https://www.npmjs.cn"},
  {name:'hexo 文档： https://hexo.io/zh-cn/docs/'},
  {name:'react菜鸟教程：  https://www.runoob.com/react/react-tutorial.html'},
  {name:'react官网： https://reactjs.org/'},
  {name:'ant.design官网： https://ant.design/index-cn'},
  {name:'免费的前端开源项目 CDN 加速服务： https://ant.design/index-cn'}
],
inputInfo:""
        };
    }
	
  save =()=>{
	  let username = this.state.inputInfo;
	  if(username && username != ""){
		  this.state.data.push({name:username});
		  this.state.inputInfo="";
		  this.setState({
          data: this.state.data
    })
	  }
  }
   delete =(index)=>{
  	  console.log(index)
	   this.state.data.splice(index,1);
	    this.setState({
	         data: this.state.data
	   })
  }
  render(){
    return(
      <div>
	   <Layout>
      <Header></Header>
      <Content>
	    <div >
		 <List size="lage"
		  header={
			  <div>REACT 以及 UI 相关
			   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

			    <Input style={{ width: '300px' }} 
				 value={this.state.inputInfo} onChange={(e)=>{this.setState({inputInfo:e.target.value})}}
				/>
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<Button  type="primary" style={{ width: '100px' }}  onClick = {
					this.save
				} > 保存 < /Button>
			  </div>
			  
			  }
		  bordered
		  dataSource={this.state.data}
		  renderItem={(value,index) => (
		  
		
		   <List.Item  key={index}>
			{index+1} : {value.name}
			<Button  type="link" style={{ float: 'right'}} onClick = {(e) => this.delete(index)} > 删除 < /Button>
		   </List.Item>
		  )}
		/>
		
	  </div>
	  </Content>
      <Footer></Footer>
    </Layout>
      </div>
    )
  } 
}
export default connect(state=>({...state}),action)(Eric)
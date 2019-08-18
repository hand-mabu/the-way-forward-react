import React, {
	Component
} from 'react';
import {
	NavLink
} from 'react-router-dom';

import {
	Layout,
	List,
	Typography ,
	Button,
	Icon
} from 'antd';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

const {
	Header,
	Footer,
	Sider,
	Content
} = Layout;

const data = [
  "npm中文文档：https://www.npmjs.cn",
  'hexo 文档： https://hexo.io/zh-cn/docs/',
  'react菜鸟教程：  https://www.runoob.com/react/react-tutorial.html',
  'react官网： https://reactjs.org/',
  'ant.design官网： https://ant.design/index-cn',
  '免费的前端开源项目 CDN 加速服务： https://ant.design/index-cn',
];

export default class Home extends Component {

	back = () => {
		this.props.history.goBack();
	}

	render() {
			return ( <
					div >
					<
					Layout >
					<
					Header  > 	<div >
					
					<span > 欢迎来到首页 < /span> </div>
					
					< /Header> <
					Content >
					
					
					
					<
					/Content> <
					Footer > 
					
						
					<nav className = "footer" >
					<NavLink exact to = {
						'/'
					}
					activeClassName = "selected" >
					<i className = "iconfont icon-shouye" > < /i> 
					<span > 首页 < /span> 
					</NavLink>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					 <NavLink to = {
						'/login'
					}
					activeClassName = "selected" >
					 <span > 个人中心 < /span> 
					 </NavLink>
					 
					 
					 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					  <NavLink to = {
					 	'/'
					 }
					 activeClassName = "selected" >
					  <span > 关于 < /span> 
					  </NavLink>
					 
					 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					  <NavLink to = {
					 	'/'
					 }
					 activeClassName = "selected" >
					  <span > 其他 < /span> 
					  </NavLink>
					 </nav>
					<div>
					 
    <List size="lage"
      header={<div>REACT 以及 UI 相关</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark>**</Typography.Text> {item}
        </List.Item>
      )}
    />
</div>

													
													
													<div >
													<Button onClick = {
														this.back
													} > < Icon type = "caret-left" / > 返回 < /Button> {
														this.props.title
													}
													 </div>
													
													< /Footer> <
													/Layout>


													<
													/div>

												)
											}
										}

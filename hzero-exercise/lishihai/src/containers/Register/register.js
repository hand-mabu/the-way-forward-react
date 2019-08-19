import React,{Component} from 'react';

import profile from '../../common/images/eric.jpg';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/user';

class Reg extends Component{
  constructor (){
    super();
    this.state={
      isCompleted:true//代表信息填写完整
    }
  }
  reg=()=>{
    if(this.nick.value&&this.password.value){
        this.props.reg({nick:this.nick.value,password:this.password.value});
        this.setState({isCompleted:true});
    }else{
      this.setState({isCompleted:false});
    }
  };
  render(){
    return(
      <div className="login">
        <img src={profile} alt="" width={'60px'}/>
        <ul>
          <li><input type="text" placeholder="用户名" ref={(element)=>{this.nick=element}}/></li>
          <li><input type="text" placeholder="密码" ref={(element)=>{this.password=element}}/></li>
          <li><a className="login_btn" onClick={this.reg}>注册</a></li>
          <li>{this.state.isCompleted?null:<span className="fullInfo">请将信息填写完整!</span>}</li>
        </ul>
      </div>
    )
  }
}
export default connect(state=>({...state}),action)(Reg)

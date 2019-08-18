
import {regs,auths,logins} from '../../api/user';
import util from '../../common/util';
import {push} from 'react-router-redux';

import axios from 'axios'



var user=[
	{'userName':"lsh",'passward':123},
	{'userName':"eric",'passward':123}
]
// 设置用户信息
const SET_USER_INFO = 'SET_USER_INFO';
// 存储错误信息 
const SET_ERROR = 'SET_ERROR';

export const reg = (userInfo) => (dispatch)=>{
  regs(userInfo).then(data=>{
    console.log(data);
      util.set('user',data); 
      dispatch({
        type:SET_USER_INFO,
        userInfo:data,
      });
      dispatch(push('/login')); //跳转路由
  })
};
// 验证用户是否登录
export const auth = () => (dispatch) =>{
  auths().then(data=>{
	 
    if(data.err=='未登录或登录已过期,请重新登录'){
      dispatch({
        type:SET_ERROR,
        err:'未登录'
      })
    }else{
      let val=util.get('user').user;
      console.log(val);
      if(val){
      dispatch({
        type:SET_USER_INFO,
        userInfo:val
      })}else{
        dispatch({
          type:SET_ERROR,
          err:'未登录'
        })
      }
    }
  });
};

export const validate = ()=> (dispatch)=>{
  auths().then(data=>{
    if(data.username){
      util.set('user',data);
      dispatch({
        type:SET_USER_INFO,
        userInfo:data
      });
      dispatch(push('/info'));
    }
  });
};
/* export const login = (userInfo) => (dispatch)=>{
  logins(userInfo).then(data=>{
	 console.log(data)
	 console.log(userInfo)
        // console.log(data);
      util.set('user',data);
      dispatch({
        type:SET_USER_INFO,
        userInfo:data
      });
	    util.get('user');
      dispatch(push('/eric'));
  })
}; */ 

export function login(info){
	
	let username = info.username;
	
	let password = info.password;
	let pas = false;
	user.forEach(function(value,index){
		if(value.userName == username && value.passward == password){
			pas = true;
		}
	});

	if(pas){
		return dispatch=>{
			 dispatch(push('/eric'));
		}
	}
	else{
		alert("用户名或密码错误！");
		console.log("用户名或密码错误！");
		return dispatch=>{
			 dispatch(push('/login'));
		}
	}
	/*return dispatch=>{
		 dispatch(push('/eric'));
		 axios.post('/login',{user,pwd})
			.then(res=>{
				dispatch(push('/eric'));
				if (res.status==200&&res.data.code===0) {
					// dispatch(registerSuccess({user,pwd,type}))
					dispatch(loginSuccess(res.data.data))
					dispatch(push('/eric'));
				}else{
					dispatch(errorMsg(res.data.msg))
				}
			})	 */	
}

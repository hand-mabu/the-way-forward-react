let initState={
  userInfo:{},//用户信息
  err:''//登录注册的错误信息
};

// 设置用户信息
const SET_USER_INFO = 'SET_USER_INFO';
// 存储错误信息 
const SET_ERROR = 'SET_ERROR';

export default function (state=initState,action) {
  switch (action.type){
    case SET_ERROR:
      return {...state,err:action.err}
    case SET_USER_INFO:
      return {...state,userInfo:action.userInfo,err:''}
  }
  return state
}
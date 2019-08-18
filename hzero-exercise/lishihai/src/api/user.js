
 const get = (url)=>{
  return fetch(url,{
    method:'get',
    credentials:'include',
    headers:{
      accept:'application/json'
    }
  }).then(res=>res.json())
};
 const post =(url,data)=>{
  return fetch(url,{
    method:'post',
    credentials:'include',
    headers:{
      'Content-Type':'application/json',
      accept:'application/json'
    },
    body:JSON.stringify(data)
  }).then(res=>res.json())
};

let url = 'http://eric/api';
//注册接口
export const regs = (userInfo) =>{
  return post(url+'/register',userInfo)
};

//验证用户是否登录
export const auths = () =>{
  return get(url+'/islogin');
};

//登录接口
export const logins = (userInfo) =>{
	console.log()
  return post(url+'/login',userInfo)
};
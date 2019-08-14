/*
 * @Description: 
 * @Date: 2019-08-11 21:29:37
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import * as accountOpt from './action-type';

let defaultState = {
  users: [
    {
      userName: 'barret', //用户名
      password: 'barret', //密码
      email: '18483690930@163.com', //邮箱
      phone: '18483690930', //电话
    }
  ]
};

export const userData = (state = defaultState, action) => {
  switch (action.type) {
    case accountOpt.ADDACCOUNT:
      return [...state.users, action.user];
    case accountOpt.DELETEACCOUNT:
      return state.users.filter(item => item.userName !== action.user.userName);
    case accountOpt.UPDATEACCOUNT:
      return state.users.map(item => item.userName === action.user.userName ? action.user : item);
    default:
      return state;
  }
}

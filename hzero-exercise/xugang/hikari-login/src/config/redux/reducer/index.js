import { type } from '../action';

const initialState = {
  menuName: ['首页']
};

export default (state = initialState , action) => {
  switch (action.type) {
    case type.SWITCH_MENU:
      return {
        menuName: action.menuName
      };
    case type.ADD_USER: {
      // 调用添加用户接口
      
      return {
        user: action.user
      }
    }
    case type.DELETE_USER: {
      // 调用删除用户接口
      console.log("删除用户啦！！")
      return {
        user: action
      }
    }
    case type.UPDATE_USER: {
      // 调用修改用户接口
      
      return {
        user: action.user
      }
    }
    default:
      return state;
  }
}

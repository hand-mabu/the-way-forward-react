export const type = {
  SWITCH_MENU: 'SWITCH_MENU',
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  UPDATE_USER: 'UPDATE_USER',
};

export function switchMenu(menuName) {
  console.log("switch");
  return {
    type: type.SWITCH_MENU,
    menuName
  }
}

export function addUser(user) {
  return {
    type: type.ADD_USER,
    user
  }
}

export function deleteUser(user) {
  return {
    type: type.DELETE_USER,
    menuName: user.name
  }
}

export function updateUser(user) {
  return {
    type: type.UPDATE_USER,
    user
  }
}


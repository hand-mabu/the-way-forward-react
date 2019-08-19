const DEFAULT_USER = {
  account: 'admin',
  userName: '管理员',
};

const user = (state = DEFAULT_USER, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
      };
    default:
      return state
  }
}

export default user;
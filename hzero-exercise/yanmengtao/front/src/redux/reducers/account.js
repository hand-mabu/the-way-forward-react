const DEFAULT_ACCOUNTS = [{
  account: 'admin',
  userName: '管理员',
}]

const accounts = (state = DEFAULT_ACCOUNTS, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return action.accounts.map(accountDto => ({
        account: accountDto.account,
        userName: accountDto.userName,
      }));
    case 'ADD_ACCOUNT':
      return [
        ...state,
        {
          account: action.account,
          userName: action.userName,
        },
      ];
    case 'DELETE_ACCOUNT':
      return state.filter(account => account.account !== action.account);
    default:
      return state
  }
}

export default accounts;
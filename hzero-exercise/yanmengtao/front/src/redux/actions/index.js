export const addAccount = ({
  account,
  userName,
} = {
    account: 'account：' + Math.random(),
    userName: 'userName：' + Math.random(),
  }) => ({
    type: 'ADD_ACCOUNT',
    account,
    userName,
  })

export const setAccount = (accounts) => ({
  type: 'SET_ACCOUNT',
  accounts,
})

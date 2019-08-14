/*
 * @Description: 
 * @Date: 2019-08-11 21:48:18
 * @Author: barret<ling.xiong@hand-china.com>
 * @Copyright: Copyright (c) 2019, Hand
 */
import * as accountOpt from './action-type';

/**
 * 新增账户
 *
 * @param {*} userName
 * @param {*} password
 * @param {*} email
 * @param {*} phone
 * @returns
 */
export const addAccount = (userName, password, email, phone) => {
  return {
    type: accountOpt.ADDACCOUNT,
    user: {
      userName, password, email, phone
    }
  }
}

/**
 * 删除账户
 *
 * @param {*} userName
 * @returns
 */
export const deleteAccount = (userName) => {
  return {
    type: accountOpt.DELETEACCOUNT,
    user: { userName }
  }
}

/**
 * 更新账户信息
 *
 * @param {*} userName
 * @param {*} password
 * @param {*} email
 * @param {*} phone
 * @returns
 */
export const updateAccount = (userName, password, email, phone) => {
  return {
    type: accountOpt.UPDATEACCOUNT,
    user: { userName, password, email, phone }
  }
}
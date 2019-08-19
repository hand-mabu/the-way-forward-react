const path = require('path');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');  // 有多种适配器可选择
const shortid = require('shortid')

const adapter = new FileSync(path.join(__dirname, './db.json')); // 申明一个适配器
const db = low(adapter);

const ACCOUNT_DB_NAME = 'account';
const USER_DB_NAME = 'user';

db.defaults({ [ACCOUNT_DB_NAME]: [], [USER_DB_NAME]: [] })
  .write();

console.log('db init........');

module.exports.getAccount = function () {
  return db.get(ACCOUNT_DB_NAME, [])
    .value();
}

module.exports.addAccount = function (userDto = {}) {
  if (!userDto.account) return;

  db.get(ACCOUNT_DB_NAME, [])
    .push({
      id: shortid.generate(),
      account: userDto.account,
      userName: userDto.userName,
    })
    .write();
}

module.exports.batchAddAccounts = function (accounts = []) {
  accounts.forEach(dto => this.addAccount(dto));
}


import React from "react";

const UserInfo = ({ userInfo }) => (
  <ul>
    <li>account: {userInfo.account}</li>
    <li>userName: {userInfo.userName}</li>
  </ul>
);

export default UserInfo;
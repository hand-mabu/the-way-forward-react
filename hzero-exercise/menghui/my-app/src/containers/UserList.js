import { connect } from 'react-redux';
import UserList from '../components/UserList';
import { deleteUserAction ,addUserAction ,updateUserAction } from '../actions/userActions';
import { message } from 'antd';

const mapStateToProps = (state) => {
    return {
        userList : state.userReducer.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser : (id) => {
            // dispatch(deleteUserAction(id))
            dispatch(dispatch => {
                fetch('http://localhost:3001/user/'+id,{
                    method : 'delete'
                })
                .then(res => res.json())
                .then(res => {
                    console.log("==============删除返回参数："+JSON.stringify(res));
                    dispatch(deleteUserAction(id));
                    message.success("删除记录成功");
                    window.location.reload();
                })
                .catch(err => {
                    message.error("删除记录失败");
                })
            })
        },
        addUser : (data) => {
            // dispatch(addUserAction(data))
            dispatch(dispatch => {
                fetch('http://localhost:3001/user',{
                    method : 'post',
                    body : JSON.stringify({
                        name : data.name,
                        student_id : data.student_id,
                        gender : data.gender
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json)
                .then(res => {
                    console.log("==============添加返回参数："+JSON.stringify(res));
                    dispatch(addUserAction(data))
                    //message.success("添加记录成功");
                    window.location.reload();
                })
                .catch(error => {
                    message.error("添加记录失败")
                })
            })
        },
        editUser : (data) => {
            // dispatch(updateUserAction(data))
            dispatch(dispatch => {
                fetch('http://localhost:3001/user/'+data.id,{
                    method : 'put',
                    body : JSON.stringify({
                        name : data.name,
                        student_id : data.student_id,
                        gender : data.gender
                    }),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                })
                .then(res => res.json())
                .then(res => {
                    console.log("==============修改返回参数："+JSON.stringify(res));
                    dispatch(updateUserAction(data))
                    message.success("修改记录成功")
                })
                .catch(error => {
                    message.error("修改记录失败")
                })
            })
        }
    }
}
const UserListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default UserListContainer;
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
//要使用 withRouter 强制更新路由信息，否则可能会出现路由地址改变但页面没有相应改变的bug
var storage=window.localStorage;
class AuthRouter extends Component {
    render() {  
        const { component: Component, ...rest } = this.props
        const isLogged = storage.getItem("isLogin") === "1" ? true : false;
      
        return (
            <Route {...rest} render={props => {
              return isLogged
                  ? <Component {...props} />
                  : <Redirect to="/login" />
            }} />
        )
      }
}

export default withRouter(AuthRouter);
import React, { lazy, Suspense } from 'react';
import {Layout} from "antd";
import { Route, Switch, Redirect } from 'react-router-dom';
import SiderBar from "../../components/layout/SiderBar";
import HeaderBar from "../../components/layout/HeaderBar";
const Home = lazy(() => import('../../pages/home/Home'));
const List = lazy(() => import('../../pages/user/list/List'));
const NotFind = lazy(() => import('../../pages/notFind/NotFind'));

class Index extends React.Component {

  render() {
    const loggedIn = window.localStorage.getItem('loggedIn');
    const mainPage = (
      <Layout>
        <SiderBar></SiderBar>
        <Layout>
          <HeaderBar history={this.props.history}></HeaderBar>
          <div className="layout-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/user/list" component={ List }/>
                <Route component={ NotFind }/>
              </Switch>
            </Suspense>
          </div>
        </Layout>
      </Layout>
    );
    return (
      loggedIn ? (
        mainPage
      ) : (
        <Redirect to="/login"/>
      )
    );
  }
}

export default Index;

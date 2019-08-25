import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { userLoginRequest } from '../../actions/loginAction';
import { addFlashMessage } from '../../actions/flashMessages';

class LoginPage extends Component {
  static propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }
  render() {
    const { addFlashMessage, userLoginRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="col-md-6">
            <LoginForm addFlashMessage={ addFlashMessage } userLoginRequest={userLoginRequest} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userLoginRequest, addFlashMessage })(LoginPage);
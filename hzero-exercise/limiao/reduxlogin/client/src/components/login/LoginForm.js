import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }
  //类型检查
  static propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ errors: {}, isLoading: true });
    this.props.userLoginRequest(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: "success",
          text: "You signed up successfully. welcome"
        })
        console.log(this.props);
        var storage=window.localStorage;
        storage.setItem("isLogin",1);
        this.props.history.push('/');
      },
      ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
    );
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        <div className="form-group">
          <label className="control-label">Username</label>

          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className={classnames('form-control', { 'is-invalid': errors.username })}
          />
          {errors.username && <span className='form-text text-muted'>{errors.username}</span>}
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>

          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className={classnames('form-control', { 'is-invalid': errors.password })}
          />
          {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
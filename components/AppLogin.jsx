import React from 'react';
import {browserHistory } from 'react-router'

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          User: <input type="text"></input><br/>
          Password: <input type="text"></input><br/>
          <button type="button" onClick={function(){browserHistory.push('roleselector')}}>Login</button>
          <button type="button" onClick={function(){browserHistory.push('signup'); console.log(browserHistory)}}>Signup</button><br/>
          <button type="submit">Forgot Password?</button>
          

          
        </form>

        {this.props.children}
      </div>
    );
  }
}

export default Login;
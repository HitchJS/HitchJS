import React from 'react';
import Login from './login.jsx';


class AppLogin extends React.Component {
  render() {
    return (
      <div className="hitch">
        <Login />
        <Signup />
      </div>
    );
  }
}

export default AppLogin;
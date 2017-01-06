import React from 'react';
// need to require browserHistory from react-router because we will be using it below
import {browserHistory } from 'react-router'
class RoleSelector extends React.Component {
  render() {
    return (
      <div className="roleSelector">
        {/*below on user clicking button we are using browserHistory to push /driver and change route to the driver or rider page*/}
        <button className="driver-btn" type="button" onClick={function(){browserHistory.push('driver')}}>Driver</button>
        <button className="rider-btn" type="button" onClick={function(){browserHistory.push('rider')}}>Rider</button>
       {/* below may not being used but may be used in the future*/}
       {this.props.children}
      </div>
    );
  }
}

export default RoleSelector;
import React from 'react';
import {browserHistory } from 'react-router'
class RoleSelector extends React.Component {
  render() {
    return (
      <div className="roleSelector">
        <button className="driver-btn" type="button" onClick={function(){browserHistory.push('driver')}}>Driver</button>
        <button className="rider-btn" type="button" onClick={function(){browserHistory.push('rider')}}>Rider</button>
       
       {this.props.children}
      </div>
    );
  }
}

export default RoleSelector;
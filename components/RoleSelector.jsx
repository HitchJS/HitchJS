import React from 'react';
import {browserHistory } from 'react-router'
class RoleSelector extends React.Component {
  render() {
    return (
      <div>
        <button type="button" onClick={function(){browserHistory.push('driver')}}>Driver</button>
        <button type="button" onClick={function(){browserHistory.push('rider')}}>Rider</button>
       
      </div>
    );
  }
}

export default RoleSelector;
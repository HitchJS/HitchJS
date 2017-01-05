import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import RoleSelector from './components/RoleSelector.jsx';
import DriverForm from './components/DriverForm.jsx';
import AppLogin from './components/AppLogin.jsx';
import Signup from './components/signup.jsx';
import RiderForm from './components/RiderForm.jsx';
import App from './components/App.js'

// child clone in react router in order to pass state

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
        <IndexRoute component= {AppLogin} />
        <Route path = "/signup" component = {Signup} />
        <Route path = "/roleselector" component = {RoleSelector}>

          <Route path = "/driver" component = {DriverForm}/>
          <Route path = "/rider" component = {RiderForm}/>
        </Route>
     </Route>

   </Router>
	
), document.getElementById('app'))
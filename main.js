import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from './components/App.jsx';
import RoleSelector from './components/RoleSelector.jsx';
import DriverForm from './components/DriverForm.jsx';
import AppLogin from './componentsLogin/login.jsx';
import Signup from './componentsLogin/signup.jsx';
import RiderForm from './components/RiderForm.jsx';
// class App extends React.Component {

//    render() {
//       return (
//          <div>
//             <ul>
//                 <a href=""><li>Home</li></a>

//                 <button onClick={function(){browserHistory.push('/components/RoleSelector')}}>RoleSelector</button>
               
//                <li>Contact</li>
//             </ul>
				
//            {this.props.children}
//          </div>
//       )
//    }
// }

//ReactDOM.render(<App />, document.getElementById('app'));
// child clone in react router in order to pass state

ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {AppLogin}/>
      <Route path = "/signup" component = {Signup} />
      <Route path = "/roleselector" component = {RoleSelector}/>
      <Route path = "/driver" component = {DriverForm}/>
      <Route path = "/rider" component = {RiderForm}/>
   </Router>
	
), document.getElementById('app'))
// import React from 'react';
// import RoleSelector from './RoleSelector.jsx';
// import DriverForm from './DriverForm.jsx';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="hitch">
//         <RoleSelector />
//         <DriverForm />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import RoleSelector from './RoleSelector.jsx';
import DriverForm from './DriverForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div>

          <RoleSelector />
          <DriverForm />
          
          
        {this.props.children}
      </div>
    );
  }
}
export default App;
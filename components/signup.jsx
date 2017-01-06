import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div className="signup">
        <form>
          User: <input type="text"></input><br/>
          Password: <input type="text"></input><br/>
          Email: <input type="text"></input><br/>
          <button type="submit">Submit</button><br/>
          
        </form>
      </div>
    );
  }
}

export default Signup;
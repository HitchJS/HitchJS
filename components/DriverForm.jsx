import React from 'react';

class DriverForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          Name: <input type="text"></input><br/>
          Destination: <input type="text"></input><br/>
          Origin: <input type="text"></input><br/>
          Departure Date: <input type="text"></input><br/>
          # of Open Seats: <input type="text"></input><br/>
          Price: <input type="text"></input><br/>
           <button type="button" onClick={function(){$.ajax({
              type: "POST",
              url: 'http://localhost:3000/random'
              
              }).then(function(data){
              console.log(data)
              })}}>Submit
          </button>
        </form>
      </div>
    );
  }
}

export default DriverForm;


import React from 'react';


class RiderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      destination: '',
      origin: '',
      departure: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('this is it', event.target.name)
    this.setState({value: event.target.name});

    // console.log(this.state.name)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }
  
  render() {
    return (
      <div>
       
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:<input type="text" value={this.state.value} onChange={this.handleChange} />
          Destination:<input type="text" value={this.state.destination} onChange={this.handleChange} />
          Origin:<input type="text" value={this.state.origin} onChange={this.handleChange} />
          Departure Date:<input type="text" value={this.state.departure} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

// console.log(this.state.name)
}

export default RiderForm;


// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }



// Name: <input type="text"></input><br/>
//           Destination: <input type="text"></input><br/>
//           Origin: <input type="text"></input><br/>
//           Departure Date: <input type="text"></input><br/>
//           <button type="button" onClick={function(){$.ajax({
//             type: "POST",
//             url: 'http://localhost:3000/random'
            
//             }).then(function(data){
//             console.log(data)
//             })}}>Submit
//           </button>




// import React from 'react';


// class RiderForm extends React.Component {
//   render() {
//     return (
//       <div>
//         <form>
//           Name: <input type="text"></input><br/>
//           Destination: <input type="text"></input><br/>
//           Origin: <input type="text"></input><br/>
//           Departure Date: <input type="text"></input><br/>
//           <button type="button" onClick={function(){$.ajax({
//             type: "POST",
//             url: 'http://localhost:3000/random'
            
//             }).then(function(data){
//             console.log(data)
//             })}}>Submit
//           </button>
    
//         </form>
//       </div>
//     );
//   }
// }

// export default RiderForm;
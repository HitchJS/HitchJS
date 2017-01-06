import React from 'react';

class DriverForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {destination: '', origin: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.originChange = this.originChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value,)
    this.setState({destination: event.target.value});
  }

  originChange(event) {
    console.log(event.target.value)
    this.setState({origin: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.destination +this.state.origin);
    console.log(this.state.destination, this.state.origin)
    event.preventDefault();

$.post( 'http://localhost:3000/random', {destination: this.state.destination, origin: this.state.origin} ).then(function(data){console.log(data)})




  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <label>
          Destination:
          <input type="text" value={this.state.destination} onChange={this.handleChange} />
        </label>
        <label>
          Origin:
          <input type="text" value={this.state.origin} onChange={this.originChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

    );
  }
}



export default DriverForm;


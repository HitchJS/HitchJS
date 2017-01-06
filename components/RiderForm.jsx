import React from 'react';
class RiderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', origin: '', destination: '', departure: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.originChange = this.originChange.bind(this);
    this.destinationChange = this.destinationChange.bind(this);
    this.departureChange = this.departureChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value,)
    this.setState({name: event.target.value});
  }
  originChange(event) {
    console.log(event.target.value)
    this.setState({origin: event.target.value});
  }
   destinationChange(event) {
    console.log(event.target.value)
    this.setState({destination: event.target.value});
  }
   departureChange(event) {
    console.log(event.target.value)
    this.setState({departure: event.target.value});
  }
  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.destination +this.state.origin);
    console.log(this.state.name, this.state.origin, this.state.destination, this.state.departure)
    event.preventDefault();
$.post( 'http://localhost:3000/random', {name: this.state.name, origin: this.state.origin, destination: this.state.destination, departure: this.state.departure} ).then(function(data){console.log(data)})
  }
  render() {
    return (
      <div className="rider">
        <div className="rider2">
          <form onSubmit={this.handleSubmit}>
            <label>Name:</label><br/>
              <input type="text" value={this.state.name} onChange={this.handleChange} /><br/>
            <label>Origin:</label><br/>
              <input type="text" value={this.state.origin} onChange={this.originChange} /><br/>
            <label>Destination:</label><br/>
              <input type="text" value={this.state.destination} onChange={this.destinationChange} /><br/>
            <label>Departure:</label><br/>
              <input type="text" value={this.state.departure} onChange={this.departureChange} /><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default RiderForm;
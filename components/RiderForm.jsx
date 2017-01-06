import React from 'react';
class RiderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', origin: '', destination: '', date: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.originChange = this.originChange.bind(this);
    this.destinationChange = this.destinationChange.bind(this);
    this.departureChange = this.departureChange.bind(this);
  }
  //these functions change state that is held on this page to the form value
  handleChange(event) {
    console.log(this)
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
    this.setState({date: event.target.value});
  }
  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.destination +this.state.origin);
    console.log(this.state.name, this.state.origin, this.state.destination, this.state.date)
    event.preventDefault();
    //below is ajax request to backend server where all of state on this page is being sent to server and eventually querying db 
$.post( 'http://localhost:3000/trips', {name: this.state.name, origin: this.state.origin, destination: this.state.destination, date: this.state.date}, 
  //callback function below waits for above to be executed and then takes in what server sends back to client (data) and sends alert 
  function(data){ 
    alert( data.name + " will be driving you to "+ data.destination + " Make sure to be in " + data.origin + " on " + data.date)})
    
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
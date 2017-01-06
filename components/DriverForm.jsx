import React from 'react';
class DriverForm extends React.Component {
  // the state below is the form data that we saved and that is sent to database
  constructor(props) {
    super(props);
    this.state = {destination: '', origin: '', name: '', date: '', seats: '', price: '', email: ''};
    // if we don't bind like below functions will be undefined onChange
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.originChange = this.originChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.seatsChange = this.seatsChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  
  }
  //these below handle all the form specific values
  handleChange(event) {
    console.log(event.target.value,)
    this.setState({destination: event.target.value});
  }
  originChange(event) {
    console.log(event.target.value)
    this.setState({origin: event.target.value});
  }
  nameChange(event) {
    console.log(event.target.value)
    this.setState({name: event.target.value});
  }
  dateChange(event) {
    console.log(event.target.value)
    this.setState({date: event.target.value});
  }
  seatsChange(event) {
    console.log(event.target.value)
    this.setState({seats: event.target.value});
  }
  priceChange(event) {
    console.log(event.target.value)
    this.setState({price: event.target.value});
  }
  emailChange(event) {
    console.log(event.target.value)
    this.setState({email: event.target.value});
  }
  //below is ajax post request to send form data to database
  handleSubmit(event) {
  event.preventDefault();
   $.post( 'http://localhost:3000/drivers', {destination: this.state.destination, origin: this.state.origin, name: this.state.name, date: this.state.date, seats: this.state.seats, price: this.state.price, email: this.state.email} ).then(function(data){console.log(data)})
  }
  render() {
    return (
      <div className="driver">
        <div className="driver2">
          <form onSubmit={this.handleSubmit}>
            <label>
              Destination:</label><br/>
              <input type="text" value={this.state.destination} onChange={this.handleChange} /><br/>
            <label>
              Origin:</label><br/>
              <input type="text" value={this.state.origin} onChange={this.originChange} /><br/>
            <label>
              Name:</label><br/>
              <input type="text" value={this.state.name} onChange={this.nameChange} /><br/>
            <label>
              Date:</label><br/>
              <input type="text" value={this.state.date} onChange={this.dateChange} /><br/>
            <label>
              Seats:</label><br/>
              <input type="text" value={this.state.seats} onChange={this.seatsChange} /><br/>
            <label>
              Price:</label><br/>
              <input type="text" value={this.state.price} onChange={this.priceChange} /><br/>
            <label>
              Email:</label><br/>
              <input type="text" value={this.state.email} onChange={this.emailChange} /><br/>
            <input type="submit" value="Submit" />
          </form>
          </div>
        </div>
    );
  }
}
export default DriverForm;
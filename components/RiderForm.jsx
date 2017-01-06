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

    this.handleName = this.handleName.bind(this);
    this.handleDestination = this.handleDestination.bind(this);
    this.handleOrigin = this.handleOrigin.bind(this);
    this.handleDeparture = this.handleDeparture.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    console.log(event.target.value)
    this.setState({ name: event.target.value });
  }

    handleDestination(event) {
    console.log(event.target.value)
    this.setState({ destination: event.target.value });
  }

    handleOrigin(event) {
    console.log(event.target.value)
    this.setState({ origin: event.target.value });
  }

    handleDeparture(event) {
    console.log(event.target.value)
    this.setState({ departure: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();

  }
  
  render() {
    return (
      <div className="rider">
       
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:<input type="text" value={this.state.value} onChange={this.handleName} />
          Destination:<input type="text" value={this.state.destination} onChange={this.handleDestination} />
          Origin:<input type="text" value={this.state.origin} onChange={this.handleOrigin} />
          Departure Date:<input type="text" value={this.state.departure} onChange={this.handleDeparture} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

// console.log(this.state.name)
}

export default RiderForm;
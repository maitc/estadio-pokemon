import React, { Component } from 'react';
import logo from '../src/static/img/pokemon_logo.png';


class Welcome extends Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

  	handleSubmit(event) {
    	localStorage.setItem('user', this.state.value)
    	let users = localStorage.getItem('user')
    	event.preventDefault();
  	}	

  	render() {
	    return (
	    	<div className="welcome">
		      <div className="title">
		      	<img src={logo} alt="Pokémon Battle"/>
		        <h1>Battle!</h1>
		      </div>
		      <div className="login">
		      	<h3>Hello trainer!</h3>
		      	<div className="form-group">
					    <label htmlFor="trainerName">What is your name?</label>
					    <input type="text" className="form-control" id="trainerName" value={this.state.value} onChange={this.handleChange}/>
					  </div>
		      	<button className="btn btn-lg btn-danger" onClick={this.handleSubmit}>Start!</button>
		      </div>
	      </div>
	    );
	}
}

export default Welcome;
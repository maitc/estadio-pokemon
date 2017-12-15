import React, { Component } from 'react';
import logo from '../src/static/img/pokemon_logo.png';


class Welcome extends Component {
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
				<input type="text" className="form-control" id="trainerName"/>
			</div>
	      	<button className="btn btn-lg btn-danger">Start!</button>
	      </div>
      </div>
    );
  }
}

export default Welcome;
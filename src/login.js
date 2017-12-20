import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
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
    	//event.preventDefault();
  	}	

  	render() {
	    return (
		    <div className="Login">
			    <div className="login">
			        <h3>Hello trainer!</h3>
			        <div className="form-group">
			          	<label htmlFor="trainerName">What is your name?</label>
			          	<input type="text" className="form-control" id="trainerName" value={this.state.value} onChange={this.handleChange}/>
			          	<Link to="/difficulty" className="btn btn-lg btn-danger" onClick={this.handleSubmit}>Ok!</Link>
			      	</div>
			    </div>
			</div>
	      
	    );
	}
}

export default Login;
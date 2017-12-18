import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import Difficulty from './difficulty'
import Login from './login'
import Selection from './selection'
import logo from '../src/static/img/pokemon_logo.png';
import FontAwesome from 'react-fontawesome'; 


class Welcome extends Component {
  	render() {
	    return (
		    <Route>
		    	<div className="welcome">
		    		<div className="login">
		    			<div>
							<Link to='back'>
							<div className="btn btn-lg btn-danger material-icons">home</div>
							</Link>
						</div>
				      	<div className="btn btn-lg btn-danger">
							<Link to='login'>Start!</Link>
						</div>
						<div className="btn btn-lg btn-danger">
							<Link to='difficulty'>Difficulty!</Link>
						</div>
						<div className="btn btn-lg btn-danger">
							<Link to='selection'>Selection!</Link>
						</div>			      	
			      	</div>
			      	<div className="title">
				      	<img src={logo} alt="Pokémon Battle"/>
				        <h1>Battle!</h1>
			      	</div>

			      <Route path="/difficulty" component={Difficulty}/>
			      <Route path="/login" component={Login}/>
			      <Route path="/selection" component={Selection}/>
		      	</div>
			</Route>
	      
	    );
	}
}

export default Welcome;
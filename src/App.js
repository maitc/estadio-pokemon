import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Logo from './logo'
import Login from './login'
import Difficulty from './difficulty'
import Selection from './selection'
import Battle from './battle'


class Welcome extends Component {
  	render() {
	    return (
	    	<div>
		    	<Switch>
				    <Route exact path="/" render={ () => (
						<div className="welcome">
				    	 	<Logo />
					      	<Login />
					    </div>
					)}/>
					<Route exact path="/difficulty" component={Difficulty}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/selection/:difficulty" component={Selection}/>
					<Route exact path="/battle" component={Battle}/>
				</Switch>
	      	</div>
	    );
	}
}

export default Welcome;
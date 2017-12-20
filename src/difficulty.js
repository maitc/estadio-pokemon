import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo'

class Difficulty extends Component {
	render(){
		return(
			<div>
				<Logo />
				<div className="difficulty">
					<div className="difficulty-tittle">
						<h2>Choose level of difficulty</h2>
					</div>
					<div className="btn-box">
						<Link to="/selection/EASY" className="btn btn-lg btn-danger btn-easy" id="easy">Easy</Link>
						<Link to="/selection/NORMAL" className="btn btn-lg btn-danger btn-medium" id="medium">Medium</Link>
						<Link to="/selection/HARD" className="btn btn-lg btn-danger btn-hard" id="hard">Hard</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Difficulty;
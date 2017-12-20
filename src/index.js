import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Welcome from './App'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Welcome />
	</BrowserRouter>, 
	document.getElementById('app'));
registerServiceWorker();
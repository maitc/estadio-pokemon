import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokemonSelect from './select';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();

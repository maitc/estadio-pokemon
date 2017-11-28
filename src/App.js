import React, { Component } from 'react';
import logo from '../src/static/img/pokemon_logo.png';


class Welcome extends Component {
  render() {
    return (
      <div className="title">
      <img src={logo} alt="Pokémon Battle"/>
        <h1>Battle!</h1>
      </div>
    );
  }
}

export default Welcome;
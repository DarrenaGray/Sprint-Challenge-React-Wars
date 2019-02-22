import React, { Component } from 'react';
import './App.css';

import Character from './components/Character';

const starwarsChars = [
  
  {
    name: 'c-3P0',
    birth_year: '112BBY',
    height: '167',
    gender: 'n/a'
  }

];


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: starwarsChars,
      name: '',
      birth_year: '',
      height: '',
      gender: '',
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Character characters={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;

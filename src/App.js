import React, { Component } from 'react';
import './App.css';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className = "class">
      <Title property= "Name" value = "Urmat" />
      <Title property= "Lastname" value = "Azamatov" />
      
      </div>
          
          
    );
  }
}

export default App;

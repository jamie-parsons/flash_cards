import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCardApp from './components/FlashCardApp';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h2>Welcome to Flash Cards</h2>
        < FlashCardApp />
      </div>
    );
  }
}

export default App;

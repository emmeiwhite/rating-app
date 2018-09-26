import React, { Component } from 'react';
import './App.css';

import Questions from './components/questions';

class App extends Component {
  render() {
    return (
      <div className="container"> 
            <Questions />
      </div>
    );
  }
}

export default App;

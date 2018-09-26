import React, { Component } from 'react';
import './App.css';

import Questions from './components/questions';
import Smileys from './components/smileys';

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

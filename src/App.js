import React, { Component } from 'react';
import './App.js';

import Questions from './components/questions';
import Smileys from './components/smileys';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Questions />
          </div>

          <div className="col-md-4">
            <Smileys />
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;

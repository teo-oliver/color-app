import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Palette {...seedColors[1]} />
      </div>
    );
  }
}

export default App;

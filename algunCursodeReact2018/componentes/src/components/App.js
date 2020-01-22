// Dependencies
import React, { Component } from 'react';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import items from '../data/menu';

const anio = new Date().getFullYear().toString()

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Hello World React" items={ items }/>
        <Content />
        <Footer anio={anio} />
      </div>
    );
  }
}

export default App;

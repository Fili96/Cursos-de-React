// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

// Data
import items from '../data/menu';

const anio = new Date().getFullYear().toString()

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {

    const { children } = this.props

    return (
      <div>
        <Header title="Hello World React" items={ items }/>
        <Content body={children} />
        <Footer anio={anio} />
      </div>
    );
  }
}

export default App;

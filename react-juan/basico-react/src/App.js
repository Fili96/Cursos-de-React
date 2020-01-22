import React, { Fragment } from 'react';
import PrimerClassComponent from './components/PrimerClassComponent'
import PrimerFuncionalComponent from './components/PrimerFuncionalComponent'
import Header from './components/Header'
import Productos from './components/Productos'
import Footer from './components/Footer'

function App() {

  return (
    <Fragment>
      <PrimerClassComponent />
      <PrimerFuncionalComponent />
      <Header titulo="Titulo props"/>

      <Productos />

      <Footer anio={new Date().getFullYear()} />
    </Fragment>
  );
}

export default App;

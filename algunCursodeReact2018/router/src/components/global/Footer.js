// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import './css/Footer.css';

class Footer extends Component {

  static propTypes = {
    anio: PropTypes.string.isRequired
  }

  render() {

    const { anio } = this.props; 

    return (
      <div className="Footer">
        <p>&copy; Fili Arl {anio}</p>
      </div>
    );
  }
}

export default Footer;

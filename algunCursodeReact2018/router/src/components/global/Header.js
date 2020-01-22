// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {

    const { items, title } = this.props;

    return (
      <div className="Header">
        <img className="Header-logo" src={logo} alt="logo" />
        <p className="Header-title">{title}</p>
        <ul className="Header-menu">
        {
          items && items.map(
            (item, key) => 
            <li key={key}> 
              <Link to={item.url} className="Header-link">
              {item.title}
              </Link>
            </li>
          )
        }
        </ul>
      </div>
    );
  }
}

export default Header;

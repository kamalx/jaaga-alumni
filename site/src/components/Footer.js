import React, { Component } from 'react';
import './Footer.css';
import logo from '../images/jaaga-logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <p>
            <img src={logo} style={{height: '4rem'}} /></p>
        </div>
      </footer>
    );
  }
}

export default Footer;

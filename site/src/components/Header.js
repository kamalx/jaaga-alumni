import React, { Component } from 'react';
import MainNav from './MainNav';
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    const navItems = {
      firstname: "KoiTo",
      lastname: "Popat",
      avatar: "default_avatar.png",
      links: {
        "Jaaga Fellowship": "http://jaaga.in/study",
        "Jaaga Home": "http://jaaga.in"
      }
    }

    return  (
      <header className={"app-header app-header-" + this.props.status}>
        <img src={logo} className="app-logo" alt="logo" />
        {/*  <Welcome sitename="Jaaga Alumni" /> */}
        <MainNav navItems={navItems} />
      </header>
    );
  }
}

export default Header;

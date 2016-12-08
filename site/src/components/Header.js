import React, { Component } from 'react';
import MainNav from './MainNav';
import logo from '../images/logo.svg';

class Header extends Component {
  render() {
    const { status, firstname, lastname } = this.props.profile;
    const navItems = {
      avatar: "default_avatar.png",
      links: {
        "Jaaga Fellowship": "http://jaaga.in/study",
        "Jaaga Home": "http://jaaga.in"
      }
    }

    return  (
      <header className={"app-header app-header-" + status}>
        <div className="container-fluid">
          <a href="#" title="Jaaga Alumni Home">
            <img src={logo} className="app-logo" alt="logo" /></a>
          {/*  <Welcome sitename="Jaaga Alumni" /> */}
          <MainNav navItems={navItems} profile={this.props.profile} />
        </div>
      </header>
    );
  }
}

export default Header;

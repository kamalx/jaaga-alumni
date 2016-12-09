import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import './App.css';

import { profile_data } from './mock_profile_data';

class App extends Component {
  constructor() {
    super();

    // define initial state
    // status may be one of { 'current', 'alumni', 'applied', 'advisor' }
    this.state = {
      profile: profile_data
    }
  }

  render() {
    return (
      <section className="App Page">
        <Header profile={this.state.profile} />
        <div className="container-fluid">
          <ProfileHeader profile={this.state.profile}
                         className="profile-header" />
          <Skills skills={this.state.profile.skills} />
        </div>
        <Footer />
      </section>
    );
  }
}

export default App;

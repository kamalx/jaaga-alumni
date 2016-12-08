import React, { Component } from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // define initial state
    // status may be one of { 'current', 'alumni', 'applied', 'advisor' }
    this.state = {
      profile: {
        status: 'current',
        firstname: 'Kamal',
        lastname: 'Morjal',
        email: 'kamal@morjal.com',
        twitter: 'kamalx',
        facebook: 'kamalx',
        github: 'kamalx',
        address: 'Hamsah Organic Farm',
        city: 'Bengaluru',
        forHire: true
      }

    }
  }

  render() {
    return (
      <section className="App">
        <Header profile={this.state.profile} />
        <div className="container-fluid">
          <ProfileHeader profile={this.state.profile}
                         className="profile-header" />
        </div>
      </section>
    );
  }
}

export default App;

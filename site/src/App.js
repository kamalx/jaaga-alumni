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
      status: 'current'
    }
  }

  render() {
    return (
      <section className="App">
        <Header status={this.state.status} />
        <div className="container-fluid">
          <ProfileHeader status={this.state.status}
                         address="Hamsah Organic Farm"
                         forHire={true}
                         className="profile-header" />
        </div>
      </section>
    );
  }
}

export default App;

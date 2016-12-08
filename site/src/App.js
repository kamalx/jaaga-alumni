import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
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
        dob: '1984-02-13',
        email: 'kamal@morjal.com',
        twitter: 'kamalx',
        facebook: 'kamalx',
        github: 'kamalx',
        address: 'Hamsah Organic Farm',
        city: 'Bengaluru',
        forHire: true,
        skills: {
          programming: [
            { name: "Javascript", initial: 50, current: 80 },
            { name: "Java", initial: 2, current: 30 },
            { name: "Clojure", initial: 5, current: 7 },
            { name: "HTML5", initial: 5, current: 7 }
          ],
          graphic_design_tools: [
            { name: "Inkscape", initial: 80, current: 85 },
            { name: "GIMP", initial: 75, current: 75 },
            { name: "Blender", initial: 40, current: 45 },
            { name: "Adobe Photoshop", initial: 40, current: 40 },
            { name: "Adobe Illustrator", initial: 40, current: 40 }
          ],
          other_skills: [
            { name: "Cooking", initial: 45, current: 65 },
            { name: "Unicycling", initial: 0, current: 55 },
            { name: "Welding", initial: 15, current: 20 },
            { name: "Soldering", initial: 15, current: 20 },
            { name: "Electric Wiring", initial: 15, current: 20 }
          ]
        }
      }

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

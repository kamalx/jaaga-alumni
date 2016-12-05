import React, { Component } from 'react';
import Header from './components/Header';
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
        <p className="app-intro">
          <br />All the world's a stage,
          <br />And all the men and women merely players;
          <br />They have their exits and their entrances,
          <br />And one man in his time plays many parts,
          <br />His acts being seven ages. At first, the infant,
          <br />Mewling and puking in the nurse's arms.
          <br />Then the whining schoolboy, with his satchel
          <br />And shining morning face, creeping like snail
          <br />Unwillingly to school. And then the lover,
          <br />Sighing like furnace, with a woeful ballad
          <br />Made to his mistress' eyebrow. Then a soldier,
          <br />Full of strange oaths and bearded like the pard,
          <br />Jealous in honor, sudden and quick in quarrel,
          <br />Seeking the bubble reputation
          <br />Even in the cannon's mouth. And then the justice,
          <br />In fair round belly with good capon lined,
          <br />With eyes severe and beard of formal cut,
          <br />Full of wise saws and modern instances;
          <br />And so he plays his part. The sixth age shifts
          <br />Into the lean and slippered pantaloon,
          <br />With spectacles on nose and pouch on side;
          <br />His youthful hose, well saved, a world too wide
          <br />For his shrunk shank, and his big manly voice,
          <br />Turning again toward childish treble, pipes
          <br />And whistles in his sound. Last scene of all,
          <br />That ends this strange eventful history,
          <br />Is second childishness and mere oblivion,
          <br />Sans teeth, sans eyes, sans taste, sans everything.
        </p>
      </section>
    );
  }
}

export default App;

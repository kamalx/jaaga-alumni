import React, {Component} from 'react';

class Skill extends Component {
  render() {
    const { name, initial, current } = this.props.skill;
    return (
      <div className="skill">
        <div className="skillname">{name} <span>{current}%</span></div>
        <div className="skillbar">
          <div className="bar1" style={{width: initial + "%"}}></div>
          <div className="bar2" style={{width: (current-initial) + "%"}}></div>
        </div>
      </div>
    )
  }
}

export default Skill;

import React, {Component} from 'react';
import { deslug } from '../helpers';

class Skill extends Component {
  render() {
    const { name, initial, current } = this.props.skill;
    const title = this.props.title;
    return (
      <div className="skill">
        <h3>{deslug(title)}</h3>
        <div className="skillname">{name} {current}%</div>
        <div className="skillbar">
          <div className="bar1" style={{width: initial + "%"}}></div>
          <div className="bar2" style={{width: (current-initial) + "%"}}></div>
        </div>
      </div>
    )
  }
}

export default Skill;

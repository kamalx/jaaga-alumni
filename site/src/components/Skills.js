import React, {Component} from 'react';
import Skillset from './Skillset';
import './Skills.css';

class Skills extends Component {
  render() {
    const skills = this.props.skills; // this is an array of objects
    console.log(skills);
    return (
      <div>
      <h2>Skills</h2>
      {
        Object.keys(skills)
              .map(key => <Skillset key={key} skillset={skills[key]} title={key} />)
      }
      </div>
    );
  }
}
export default Skills;

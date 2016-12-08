import React, {Component} from 'react';
import Skill from './Skill';
import './Skills.css';

class Skills extends Component {
  render() {
    const skills = this.props.skills; // this is an array of objects
    console.log(skills);
    return (
      <div>
      <h2>Skills</h2>
      <h4>Skills – <em>self assessed based on frequency of work done in
      various fields</em></h4>
        {
          Object.keys(skills)
                .map(key => skills[key]
                              .map( s => <Skill skill={s} title={key} />))
        }
      </div>
    );
  }
}
export default Skills;

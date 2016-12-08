import React, {Component} from 'react';
import Skill from './Skill';
import { deslug } from '../helpers';

class Skillset extends Component {
  render() {
    const skillset = this.props.skillset;
    return (
      <section className="skillset">
        <h3>{ deslug(this.props.title) }</h3>
        {
          skillset.map( s => <Skill key={s.name} skill={s} />)
        }
      </section>
    );
  }
}
export default Skillset;

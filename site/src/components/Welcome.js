import React, {Component} from 'react';

class Welcome extends Component {
  render() {
    return (
      <p>{ this.props.sitename }</p>
    );
  }
}

export default Welcome;

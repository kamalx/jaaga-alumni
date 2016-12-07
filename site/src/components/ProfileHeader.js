import React, {Component} from 'react';
import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    var status = (this.props.status==="current"? "Current Student".toUpperCase() :
                  this.props.status.toUpperCase());
    return (
      <div className={this.props.className}>
        <p>{status}</p>
        <p>{this.props.address.toUpperCase()}</p>
        {/*
        conditional expressions clubbed with logical &&
        can be used as in following statement to render
        parts of this JSX conditionally. */}
        {this.props.forHire &&
          <p>{"Hire Me!".toUpperCase()}</p>
        }
      </div>
    );
  }
}

export default ProfileHeader;

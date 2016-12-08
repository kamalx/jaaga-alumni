import React, {Component} from 'react';
import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    const { status, firstname, lastname, email, address, city, forHire }
      = this.props.profile; // destructuring in action
    var _status = (status==="current"? "Current Student".toUpperCase() :
                  status.toUpperCase());
    return (
      <div className={this.props.className}>
        <div className="row">
          <div className="half">
            <p className="title status">
              <span>Status</span>
              <span>{_status}</span>
            </p>
            <p className="title location">
              <span>Location</span>
              <span>{city}</span>
            </p>
            <p className="title email">
              <span>Email</span>
              <span className="details"><a href={"mailto:" + email}
                      title={"Contact " + firstname}>{email}</a></span>
            </p>
          </div>
          <div className="half">
            <p className="title">
              <span>About {this.props.firstname}</span>
              <span className="details">{firstname} is a designer and web developer
              currently learning to build web and mobile apps using React and
              React Native frameworks. Besides computer programming, his interests
              post-exploration at Jaaga have expanded to riding and (hopefully)
              fixing, and maintaining electric unicycles, building sustainable
              shelters meeting basic daily needs of water, sanitation,
              electricity and internet, using machine tools to create
              tangible and useful objects and some more.
              </span>
            </p>
            {/*
            conditional expressions clubbed with logical &&
            can be used as in following statement to render
            parts of this JSX conditionally. */}
            {
              forHire &&
                <button className="right">Hire {firstname} {lastname}</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;

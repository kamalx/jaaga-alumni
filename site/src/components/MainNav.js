import React, {Component} from 'react';

class MainNav extends Component {
  render() {
    const { links } = this.props.navItems;
    const {firstname, lastname} = this.props.profile;
    console.log(links, firstname, lastname);
    return (
      <section className="main-nav">
        {
          Object.keys(links).map((linkItem) =>
            <a key={linkItem} href={links[linkItem]}>
                    {linkItem}</a>)
        }
      </section>
    )
  }
}

export default MainNav;

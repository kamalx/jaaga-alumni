import React, {Component} from 'react';

class MainNav extends Component {
  render() {
    const { links, firstname, lastname } = this.props.navItems;
    console.log(links, firstname, lastname);
    return (
      <section className="main-nav">
        {
          Object.keys(links).map((linkItem) =>
            <a href={links[linkItem]}>
                    {linkItem}</a>)
        }
      </section>
    )
  }
}

export default MainNav;

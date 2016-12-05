import React, {Component} from 'react';

class MainNav extends Component {
  render() {
    const { links, firstname, lastname } = this.props.navItems;
    console.log(links, firstname, lastname);
    return (
      <section className="main-nav">
        {
          links.map((linkItem) =>
            <a href={linkItem.split(";")[1]}>
                    {linkItem.split(";")[0]}</a>)
        }
      </section>
    )
  }
}

export default MainNav;

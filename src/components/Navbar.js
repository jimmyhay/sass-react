import React from 'react';
import NavMenu from './NavMenu'

class Navbar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        navOpen: false
      };
   }

  componentDidMount() {
    console.log("mounted that bitch");
  }

  handleMouseDown(e) {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render() {
    return (
      <div>
        <NavMenu open={this.state.navOpen}/>
        <div className='navbar' onClick={this.handleMouseDown.bind(this)}>
          <div className='nav-logo'></div>
        </div>
      </div>

    );
  }
}

export default Navbar;

import React from 'react';
import TweenMax from 'gsap'

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  getVisibleState() {

  }

  componentWillReceiveProps(nextProps) {
    console.log("NavMenu componentWillReceiveProps", nextProps);

    this.setState({
      open: !this.state.open
    });

    // this.setState({
    //   open: nextProps.open;
    // });
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    console.log("NavMenuProp", this.state.open, prevProps);

    if (this.state.open) {
      TweenMax.to(this.refs.myDiv,.6,{left:0, ease:'easeInOutCubic'});
    } else {
      TweenMax.to(this.refs.myDiv,.6,{left:'-100vw', ease:'easeInOutCubic'});
    }
  }

  handleMouseDown(e) {
    console.log("handleMouseDown", this.state.open);
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
        <div ref="myDiv" className="nav-menu-background">
          <div className='nav-close-button' onClick={this.handleMouseDown.bind(this)}></div>
        </div>
                // <div onMouseDown={self.props.handleMouseDown} className="nav-menu-background" style={{
                //   transform: "translate3d(" + x + "vw, 0vw, 0)"
                // }}>
                // </div>
    );
  }
}

export default NavMenu;

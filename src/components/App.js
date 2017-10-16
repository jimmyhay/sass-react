import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import Navbar from './Navbar'
import HomepageSection from './HomepageSection'
import HomepageIntro from './HomepageIntro'

// export default React.createClass({
class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {homepageIntroVisible: false};

      this.handleScroll = this.handleScroll.bind(this);
   }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  componentDidUpdate() {
    console.log("UPDATED");
  }

  handleScroll(event) {
    // console.log('handleScroll');
    // console.log(window.pageYOffset);

    // console.log();
    //console.log(document.documentElement.offsetHeight-window.innerHeight);

    // console.log(ReactDOM.findDOMNode(this.refs['homepageIntro']).getBoundingClientRect().y/window.innerHeight);
    // console.log(ReactDOM.findDOMNode(this.refs.refTest.refs.refTest2));
    // console.log(ReactDOM.findDOMNode(this.refs['homepageIntro']).getBoundingClientRect());
    var pagePercent = ReactDOM.findDOMNode(this.refs['homepageIntro']).getBoundingClientRect().top/screen.height;
    // console.log(pagePercent);
    if (pagePercent < 0.5
        && !this.refs.refTest.state.introText1Visible) {
        this.refs.refTest.setState({introText1Visible : true});
        TweenMax.to(ReactDOM.findDOMNode(this.refs.refTest.refs.homepageIntro1),.6,{opacity:1, ease:'easeInOutCubic'});
    } else if (pagePercent < 0.3
        && !this.refs.refTest.state.introText2Visible) {
        this.refs.refTest.setState({introText2Visible : true});
        TweenMax.to(ReactDOM.findDOMNode(this.refs.refTest.refs.homepageIntro2),.6,{opacity:1, ease:'easeInOutCubic'});
    }
    // this.setProps({scrollPos: window.pageYOffset});


    // this.state.scrollPos = window.pageYOffset;
    // console.log('handleScroll', event.srcElement.documentElement.scrollTop);
    // console.log(this.props);

    // setState({scrollPos: event.srcElement.documentElement.scrollTop});

    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);
    //
    // this.setState({
    //   transform: itemTranslate
    // });
  }

  render() {
    return (
      <div>
        <div className='background-video'>
          <video loop='true' autoPlay="true" className='background-video'>
            <source src="./assets/videos/HP_Homepage.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div className='nav-dummy-placeholder'></div>
        <div className='video-overlay'></div>
        <div className='homepage-content'>
          <span className='heading-span-one'><h1>Sign Against Stroke</h1></span>
          <div className='homepage-scroll'>
            <div>Scroll to Explore</div>
            <img src='./assets/homepage/down-arrow.png'/>
          </div>
        </div>
        <div ref='homepageIntro'><HomepageIntro ref='refTest'/></div>
        <Link to="/secondLevel" style={{ textDecoration: 'none' }}><div><HomepageSection color='black' heading='About Stroke' text1='' text2='' video='./assets/videos/HP_about.mp4'/></div></Link>
        <div><HomepageSection color='black' heading='Life After Stroke' text1='' text2='' video='./assets/videos/HP_LifeAfter.mp4'/></div>
        <div><HomepageSection color='black' heading='Kinds of Stroke' text1='' text2='' video='./assets/videos/HP_TakeAction0.mp4'/></div>
      </div>
    )
  }
}

export default App;

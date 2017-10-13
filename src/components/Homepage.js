import React from 'react';
import Navbar from './Navbar.js';
import HomepageSection from './HomepageSection.js'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div><Navbar /></div>
        <div className='video-overlay'></div>
        <div className='background-video'>
          <video loop='true' autoPlay="true" className='background-video'>
            <source src="./assets/videos/HP_Homepage.mp4" type="video/mp4"></source>
          </video>
        </div>
        <div><HomepageSection color='lightgrey' video='./assets/videos/HP_about.mp4'/></div>
        <div><HomepageSection color='blue'  video='./assets/videos/HP_LifeAfter.mp4'/></div>
        <div><HomepageSection color='white'  video='./assets/videos/HP_TakeAction0.mp4'/></div>
      </div>
    );
  }
}

export default Homepage;

import React from 'react';
import Navbar from './Navbar.js';
import HomepageSection from './HomepageSection.js'

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className='background-video'>
          <video loop='true' autoPlay="true" className='background-video'>
            <source src="./assets/videos/HP_about.mp4" type="video/mp4"></source>
          </video>
        </div>
      </div>
    );
  }
}

export default Homepage;

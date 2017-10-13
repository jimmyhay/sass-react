import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
import HomepageSection from './HomepageSection'
import HomepageIntro from './HomepageIntro'

export default React.createClass({
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
          <h1>Sign Against Stroke</h1>
          <div className='homepage-scroll'>
            <div>Scroll to Explore</div>
            <img src='./assets/homepage/down-arrow.png'/>
          </div>
        </div>
        <div><HomepageIntro /></div>
        <Link to="/secondLevel"><div><HomepageSection color='black' video='./assets/videos/HP_about.mp4'/></div></Link>
        <div><HomepageSection color='black'  video='./assets/videos/HP_LifeAfter.mp4'/></div>
        <div><HomepageSection color='black'  video='./assets/videos/HP_TakeAction0.mp4'/></div>
      </div>
    )
  }
})

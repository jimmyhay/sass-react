import React from 'react';
import SectionspageArticle from './SectionspageArticle.js'
import BottomFooter from './BottomFooter.js'

class Sectionspage extends React.Component {
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
        <div className='sections-content homepage-content'>
          <div className='sections-bits'>
            <div className='sections-page-h1'>About <span className='sections-title-second-word'>Stroke</span></div>
            <div className='sections-blue-border'></div>
            <div className='sections-subtext-1'>Stroke is a brain attack, occurring when the blood supply to any part of the brain is cut off or blocked. </div>
            <div className='sections-subtext-2'>Find out more about stroke, the causes, effects, the different types, and other general information.</div>
            <div className='homepage-section-clear'/>
          </div>
          <div className='sections-scroll homepage-scroll'>
            <div>Scroll to Explore</div>
            <img src='./assets/homepage/down-arrow.png'/>
          </div>
        </div>
        <SectionspageArticle grey='false' />
        <SectionspageArticle grey='true' />
        <SectionspageArticle grey='false' />
        <SectionspageArticle grey='true' />
        <BottomFooter />
      </div>
    );
  }
}

export default Sectionspage;

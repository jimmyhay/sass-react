import React from 'react';
import BottomFooter from './BottomFooter'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <div className='footer-links-container'>
          <div className='footer-links-h1'>About Stroke</div>
          <div className='footer-link'>What is stroke</div>
          <div className='footer-link'>What causes stroke?</div>
          <div className='footer-link'>Signs and symptoms</div>
          <div className='footer-link'>Understanding your stroke risk</div>
        </div>
        <div className='footer-showmore-button'></div>
        <div className='footer-expanded'>
          <div className='footer-divider'></div>
          <div className='footer-links-container'>
            <div className='footer-links-h1'>Life After Stroke</div>
            <div className='footer-link'>Physical effects</div>
            <div className='footer-link'>Effects on personality</div>
            <div className='footer-link'>Effects on family and care partners</div>
            <div className='footer-divider'></div>
          </div>
          <div className='footer-links-container'>
            <div className='footer-links-h1'>Take Action</div>
            <div className='footer-link'>Understand your treatment options</div>
            <div className='footer-link'>Talking to your doctor</div>
            <div className='footer-divider'></div>
          </div>
          <div className='footer-links-container'>
            <div className='footer-links-h1'>Stroke Patient Stories</div>
            <div className='footer-link'>Sass story</div>
            <div className='footer-link'>Share your story</div>
            <div className='footer-divider'></div>
          </div>
          <div className='footer-links-container'>
            <div className='footer-links-h1'>The Campaign</div>
            <div className='footer-link'>About the Charter</div>
            <div className='footer-link'>Progress of the Charter</div>
            <div className='footer-link'>Who is behind Sign Against Stroke</div>
          </div>
        </div>
        <BottomFooter />
      </div>
    );
  }
}

export default Footer;

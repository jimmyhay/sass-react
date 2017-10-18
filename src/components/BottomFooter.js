import React from 'react';

class BottomFooter extends React.Component {
  render() {
    return (
      <div className='bottom-footer-container'>
        <div className='bottom-footer-info-container'>
          <div className='bottom-footer-quote'>“Start thinking wellness, not illness”</div>
          <div className='bottom-footer-author'>Kate Alatt, <i>Stroke Survivor</i></div>
          <div className='bottom-footer-links-container'>
            <div className='bottom-footer-fb'></div>
            <div className='bottom-footer-insta'></div>
            <div className='bottom-footer-twitter'></div>
          </div>
          <div className='bottom-footer-privacy'>Privacy Statement</div>
          <div className='bottom-footer-terms'>Terms and Condition</div>
          <div className='bottom-footer-legal'>Legal Lorem Ipsum</div>
          <div className='bottom-footer-polish'>THE POLISH STROKE FOUNDATION</div>
          <div className='bottom-footer-copyright'>© Copyright 2017 Sign Against Stroke</div>
        </div>
      </div>
    );
  }
}

export default BottomFooter;
